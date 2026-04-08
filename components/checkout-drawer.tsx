'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/app/cart-context';
import Image from 'next/image';

interface CheckoutDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type CheckoutStep = 'cart' | 'info' | 'payment' | 'success';

export function CheckoutDrawer({ open, onOpenChange }: CheckoutDrawerProps) {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
  });

  const handleClose = () => {
    onOpenChange(false);
    setStep('cart');
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToPayment = () => {
    if (!formData.email || !formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all fields');
      return;
    }
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    setStep('success');
  };

  const handleNewOrder = () => {
    clearCart();
    setStep('cart');
    setFormData({ email: '', name: '', phone: '', address: '' });
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center justify-center" onClick={handleClose}>
      <div
        className="bg-background w-full md:w-[90%] md:max-w-2xl md:rounded-lg rounded-t-2xl max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-background z-10">
          <h2 className="font-serif text-xl text-foreground">
            {step === 'cart' && 'Your Cart'}
            {step === 'info' && 'Delivery Information'}
            {step === 'payment' && 'Payment'}
            {step === 'success' && 'Order Confirmed'}
          </h2>
          <button onClick={handleClose} className="text-foreground hover:text-primary">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {step === 'cart' && renderCartStep()}
          {step === 'info' && renderInfoStep()}
          {step === 'payment' && renderPaymentStep()}
          {step === 'success' && renderSuccessStep()}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 border-t border-border p-6 bg-background space-y-3">
          {step === 'cart' && items.length > 0 && (
            <>
              <div className="flex justify-between items-center text-lg font-serif text-foreground">
                <span>Total:</span>
                <span className="text-accent">${total.toFixed(2)}</span>
              </div>
              <Button
                onClick={() => setStep('info')}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
              >
                Proceed to Checkout
              </Button>
            </>
          )}
          {step === 'info' && (
            <Button
              onClick={handleProceedToPayment}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              Continue to Payment
            </Button>
          )}
          {step === 'payment' && (
            <Button
              onClick={handleCompleteOrder}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              {paymentMethod === 'mpesa' ? 'Request STK Push' : 'Pay Now'}
            </Button>
          )}
          {step === 'success' && (
            <Button
              onClick={handleNewOrder}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              Continue Shopping
            </Button>
          )}
          {step !== 'success' && (
            <Button onClick={handleClose} variant="outline" className="w-full">
              {step === 'cart' ? 'Continue Shopping' : 'Back'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  function renderCartStep() {
    if (items.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Your cart is empty</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 pb-4 border-b border-border last:border-0">
            <div className="relative w-20 h-20 flex-shrink-0 rounded">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-serif text-sm text-foreground mb-1">{item.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">${item.price.toFixed(2)} each</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border border-border rounded text-foreground hover:bg-muted"
                >
                  −
                </button>
                <span className="text-sm text-foreground min-w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border border-border rounded text-foreground hover:bg-muted"
                >
                  +
                </button>
                <span className="ml-auto text-sm font-serif text-accent">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-muted-foreground hover:text-destructive text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }

  function renderInfoStep() {
    return (
      <div className="space-y-4">
        <div className="bg-accent/10 p-4 rounded text-sm text-foreground">
          <p className="font-medium mb-1">Delivery</p>
          <p className="text-muted-foreground">We deliver across Kenya. Enter your details below.</p>
        </div>

        <div>
          <Label htmlFor="name" className="text-foreground font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInfoChange}
            placeholder="Jane Doe"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInfoChange}
            placeholder="jane@example.com"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground font-medium">
            Phone Number (Kenya)
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInfoChange}
            placeholder="0712 345 678"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="address" className="text-foreground font-medium">
            Delivery Address (Kenya)
          </Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInfoChange}
            placeholder="e.g., Nairobi, Kiambu, etc."
            className="mt-2"
          />
        </div>
      </div>
    );
  }

  function renderPaymentStep() {
    return (
      <div className="space-y-6">
        {/* Payment Method Selection */}
        <div>
          <Label className="text-foreground font-medium mb-4 block">Select Payment Method</Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* M-Pesa Option */}
            <button
              onClick={() => setPaymentMethod('mpesa')}
              className={`p-4 border-2 rounded-lg transition ${
                paymentMethod === 'mpesa'
                  ? 'border-accent bg-accent/5'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <div className="text-left">
                <p className="font-serif text-lg text-foreground mb-2">M-Pesa</p>
                <p className="text-sm text-muted-foreground">Pay with your phone</p>
              </div>
            </button>

            {/* Card Option */}
            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-4 border-2 rounded-lg transition ${
                paymentMethod === 'card'
                  ? 'border-accent bg-accent/5'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <div className="text-left">
                <p className="font-serif text-lg text-foreground mb-2">Credit / Debit Card</p>
                <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
              </div>
            </button>
          </div>
        </div>

        {/* Payment Form */}
        {paymentMethod === 'mpesa' && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="mpesa-phone" className="text-foreground font-medium">
                M-Pesa Phone Number
              </Label>
              <Input
                id="mpesa-phone"
                placeholder="0712 345 678"
                className="mt-2"
              />
            </div>
            <div className="bg-accent/10 p-4 rounded text-sm text-foreground space-y-2">
              <p className="font-medium">How it works:</p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Click "Request STK Push" below</li>
                <li>You&apos;ll receive a prompt on your phone</li>
                <li>Enter your M-Pesa PIN to complete payment</li>
              </ol>
            </div>
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="card-number" className="text-foreground font-medium">
                Card Number
              </Label>
              <Input
                id="card-number"
                placeholder="1234 5678 9012 3456"
                className="mt-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="card-expiry" className="text-foreground font-medium">
                  Expiry (MM/YY)
                </Label>
                <Input
                  id="card-expiry"
                  placeholder="12/25"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="card-cvc" className="text-foreground font-medium">
                  CVC
                </Label>
                <Input
                  id="card-cvc"
                  placeholder="123"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-secondary/30 p-4 rounded space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="text-foreground">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-border pt-2">
            <span className="font-medium text-foreground">Total:</span>
            <span className="font-serif text-lg text-accent">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  function renderSuccessStep() {
    return (
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">✓</div>
        <h3 className="font-serif text-2xl text-foreground mb-2">Order Confirmed</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Thank you for your order. A confirmation email has been sent to{' '}
          <span className="font-medium text-foreground">{formData.email}</span>
        </p>

        <div className="bg-accent/10 p-4 rounded space-y-3 text-left">
          <div>
            <p className="text-sm text-muted-foreground">Order Total</p>
            <p className="font-serif text-2xl text-accent">${total.toFixed(2)}</p>
          </div>
          <div className="border-t border-border pt-3">
            <p className="font-medium text-foreground mb-1">What&apos;s Next?</p>
            <p className="text-sm text-muted-foreground">
              You&apos;ll receive a text message with delivery updates.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
