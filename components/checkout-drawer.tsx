'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/app/cart-context';
import { Trash2, X } from 'lucide-react';
import Image from 'next/image';

interface CheckoutDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type CheckoutStep = 'cart' | 'info' | 'payment' | 'success';

export function CheckoutDrawer({ open, onOpenChange }: CheckoutDrawerProps) {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
  });

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleProceedToInfo = () => {
    if (items.length === 0) return;
    setStep('info');
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

  const renderCartStep = () => (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <Button onClick={handleClose} variant="outline">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-3">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    ${item.price.toFixed(2)} each
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="text-xs px-1.5 py-0.5 border border-border hover:bg-secondary"
                    >
                      −
                    </button>
                    <span className="text-xs w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="text-xs px-1.5 py-0.5 border border-border hover:bg-secondary"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-serif text-lg pt-2 border-t">
              <span>Total</span>
              <span className="text-accent">${total.toFixed(2)}</span>
            </div>
          </div>
          <Button
            onClick={handleProceedToInfo}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </div>
  );

  const renderInfoStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-foreground">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInfoChange}
          placeholder="Jane Doe"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInfoChange}
          placeholder="jane@example.com"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="phone" className="text-foreground">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInfoChange}
          placeholder="+254 700 000000"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="address" className="text-foreground">
          Delivery Address
        </Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInfoChange}
          placeholder="123 Main Street, City"
          className="mt-1"
        />
      </div>
      <div className="flex gap-2 pt-4">
        <Button
          onClick={() => setStep('cart')}
          variant="outline"
          className="flex-1"
        >
          Back
        </Button>
        <Button
          onClick={handleProceedToPayment}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Continue
        </Button>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="font-serif text-foreground mb-3">Order Summary</h3>
        <div className="space-y-2 text-sm">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-muted-foreground">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 flex justify-between font-serif text-foreground">
            <span>Total</span>
            <span className="text-accent">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-foreground mb-3 block">Payment Method</Label>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2 p-3 border border-border rounded cursor-pointer hover:bg-secondary/30">
            <RadioGroupItem value="mpesa" id="mpesa" />
            <Label htmlFor="mpesa" className="cursor-pointer flex-1 mb-0">
              M-Pesa
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 border border-border rounded cursor-pointer hover:bg-secondary/30 mt-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="cursor-pointer flex-1 mb-0">
              Debit/Credit Card
            </Label>
          </div>
        </RadioGroup>
      </div>

      {paymentMethod === 'mpesa' && (
        <div className="p-3 bg-secondary/30 rounded text-sm text-muted-foreground">
          <p className="mb-2">You will receive a prompt on your phone to complete the payment.</p>
          <p>Enter your M-Pesa PIN to confirm the transaction.</p>
        </div>
      )}

      {paymentMethod === 'card' && (
        <div className="space-y-3">
          <Input placeholder="Card Number" />
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="MM/YY" />
            <Input placeholder="CVV" />
          </div>
        </div>
      )}

      <div className="flex gap-2 pt-4">
        <Button
          onClick={() => setStep('info')}
          variant="outline"
          className="flex-1"
        >
          Back
        </Button>
        <Button
          onClick={handleCompleteOrder}
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Complete Order
        </Button>
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-serif text-lg text-foreground mb-2">Order Confirmed!</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for your purchase. A confirmation email has been sent to{' '}
          <span className="font-medium text-foreground">{formData.email}</span>
        </p>
      </div>
      <div className="bg-secondary/50 p-4 rounded text-sm text-foreground">
        <p className="mb-1">
          <span className="text-muted-foreground">Order Total:</span>{' '}
          <span className="font-serif text-accent">${total.toFixed(2)}</span>
        </p>
        <p className="text-muted-foreground text-xs">
          You will receive tracking information shortly.
        </p>
      </div>
      <Button
        onClick={handleNewOrder}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Continue Shopping
      </Button>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-foreground">
              {step === 'cart' && 'Shopping Cart'}
              {step === 'info' && 'Delivery Information'}
              {step === 'payment' && 'Payment'}
              {step === 'success' && 'Order Confirmed'}
            </SheetTitle>
            <button
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {step === 'cart' && renderCartStep()}
          {step === 'info' && renderInfoStep()}
          {step === 'payment' && renderPaymentStep()}
          {step === 'success' && renderSuccessStep()}
        </div>
      </SheetContent>
    </Sheet>
  );
}
