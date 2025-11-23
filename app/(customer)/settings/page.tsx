"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Bell, Shield, CreditCard } from "lucide-react";

export default function CustomerSettingsPage() {
  return (
    <div className="min-h-screen bg-background cyber-grid relative">
      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      <Navbar />

      <main className="container px-4 py-8 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and security.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-accent" />
                <CardTitle>Profile</CardTitle>
              </div>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Full Name</label>
                <Input defaultValue="Alex Mercer" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Email</label>
                <Input type="email" defaultValue="alex.mercer@example.com" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <CardTitle>Security</CardTitle>
              </div>
              <CardDescription>Security and authentication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Two-Factor Authentication</span>
                <Button variant="outline" size="sm">Enable</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Biometric Login</span>
                <span className="text-sm text-green-500">Active</span>
              </div>
              <Button variant="outline" className="w-full">Change Password</Button>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-accent" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Transaction Alerts</span>
                <Button variant="outline" size="sm">On</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Security Alerts</span>
                <Button variant="outline" size="sm">On</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Marketing Emails</span>
                <Button variant="outline" size="sm">Off</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                <CardTitle>Payment Methods</CardTitle>
              </div>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div>
                  <div className="text-sm font-medium text-foreground">**** **** **** 4521</div>
                  <div className="text-xs text-muted-foreground">Expires 12/25</div>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              <Button variant="outline" className="w-full">Add Payment Method</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

