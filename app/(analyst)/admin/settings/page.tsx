"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Bell, Shield, Database, Key } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background cyber-grid relative">
      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      <Navbar />

      <main className="container px-4 py-8 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
          <p className="text-muted-foreground">Configure system preferences and security options.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-accent" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Manage alert and notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Email Alerts</span>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">SMS Notifications</span>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Push Notifications</span>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
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
                <span className="text-sm text-foreground">Session Timeout</span>
                <Input type="number" defaultValue={30} className="w-20" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">IP Whitelist</span>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-accent" />
                <CardTitle>Data Management</CardTitle>
              </div>
              <CardDescription>Database and data retention settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Log Retention</span>
                <Input type="number" defaultValue={90} className="w-20" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Backup Frequency</span>
                <Button variant="outline" size="sm">Daily</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Data Export</span>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Key className="h-5 w-5 text-accent" />
                <CardTitle>API Keys</CardTitle>
              </div>
              <CardDescription>Manage API access and keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Active Keys</span>
                <span className="text-sm text-muted-foreground">3</span>
              </div>
              <Button className="w-full">Generate New Key</Button>
              <Button variant="outline" className="w-full">View All Keys</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

