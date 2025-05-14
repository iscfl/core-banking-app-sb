import Link from "next/link"
import {
  BarChart3,
  Bell,
  CreditCard,
  DollarSign,
  Download,
  History,
  LogOut,
  Menu,
  Plus,
  Settings,
  User,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/dashboard" className="flex items-center gap-2 text-emerald-600">
                    <DollarSign className="h-5 w-5" />
                    <span>SecureBank</span>
                  </Link>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                  <Link href="/accounts" className="flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    <span>Accounts</span>
                  </Link>
                  <Link href="/transactions" className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    <span>Transactions</span>
                  </Link>
                  <Link href="/cards" className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Cards</span>
                  </Link>
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2 md:hidden">
              <DollarSign className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">SecureBank</span>
            </Link>
            <Link href="/dashboard" className="hidden items-center gap-2 md:flex">
              <DollarSign className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">SecureBank</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50/50 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-4 text-sm font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-emerald-600"
              >
                <BarChart3 className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/accounts"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-emerald-600 transition-all hover:text-emerald-700"
              >
                <Wallet className="h-5 w-5" />
                Accounts
              </Link>
              <Link
                href="/transactions"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-emerald-600"
              >
                <History className="h-5 w-5" />
                Transactions
              </Link>
              <Link
                href="/cards"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-emerald-600"
              >
                <CreditCard className="h-5 w-5" />
                Cards
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-emerald-600"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">Accounts</h1>
                <p className="text-gray-500">Manage your bank accounts and cards</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Account
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="all">All Accounts</TabsTrigger>
                <TabsTrigger value="checking">Checking</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
                <TabsTrigger value="credit">Credit Cards</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Checking Accounts</CardTitle>
                      <CardDescription>Your everyday spending accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <Wallet className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Primary Checking</h3>
                          <p className="text-sm text-gray-500">**** 4832</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">$12,345.67</p>
                          <p className="text-sm text-gray-500">Available</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <Wallet className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Joint Checking</h3>
                          <p className="text-sm text-gray-500">**** 9876</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">$3,451.90</p>
                          <p className="text-sm text-gray-500">Available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Savings Accounts</CardTitle>
                      <CardDescription>Your long-term savings accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <Wallet className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">High-Yield Savings</h3>
                          <p className="text-sm text-gray-500">**** 7291</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">$8,765.43</p>
                          <p className="text-sm text-gray-500">Available</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <Wallet className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Emergency Fund</h3>
                          <p className="text-sm text-gray-500">**** 5432</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">$15,000.00</p>
                          <p className="text-sm text-gray-500">Available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Credit Cards</CardTitle>
                      <CardDescription>Your credit card accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <CreditCard className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Rewards Credit Card</h3>
                          <p className="text-sm text-gray-500">**** 5678</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">$3,452.90</p>
                          <p className="text-sm text-gray-500">Available Credit</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <CreditCard className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Travel Credit Card</h3>
                          <p className="text-sm text-gray-500">**** 1234</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">$7,500.00</p>
                          <p className="text-sm text-gray-500">Available Credit</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="checking">
                <Card>
                  <CardHeader>
                    <CardTitle>Checking Accounts</CardTitle>
                    <CardDescription>Your everyday spending accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <Wallet className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Primary Checking</h3>
                        <p className="text-sm text-gray-500">**** 4832</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$12,345.67</p>
                        <p className="text-sm text-gray-500">Available</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <Wallet className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Joint Checking</h3>
                        <p className="text-sm text-gray-500">**** 9876</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$3,451.90</p>
                        <p className="text-sm text-gray-500">Available</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Checking Account
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="savings">
                <Card>
                  <CardHeader>
                    <CardTitle>Savings Accounts</CardTitle>
                    <CardDescription>Your long-term savings accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <Wallet className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">High-Yield Savings</h3>
                        <p className="text-sm text-gray-500">**** 7291</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$8,765.43</p>
                        <p className="text-sm text-gray-500">Available</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <Wallet className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Emergency Fund</h3>
                        <p className="text-sm text-gray-500">**** 5432</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$15,000.00</p>
                        <p className="text-sm text-gray-500">Available</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Savings Account
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="credit">
                <Card>
                  <CardHeader>
                    <CardTitle>Credit Cards</CardTitle>
                    <CardDescription>Your credit card accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <CreditCard className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Rewards Credit Card</h3>
                        <p className="text-sm text-gray-500">**** 5678</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$3,452.90</p>
                        <p className="text-sm text-gray-500">Available Credit</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <CreditCard className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Travel Credit Card</h3>
                        <p className="text-sm text-gray-500">**** 1234</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$7,500.00</p>
                        <p className="text-sm text-gray-500">Available Credit</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Apply for New Credit Card
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Account Activity</CardTitle>
                <CardDescription>Recent activity across all your accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Deposit to High-Yield Savings</h3>
                      <p className="text-sm text-gray-500">May 12, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-500">+$1,000.00</p>
                      <p className="text-sm text-gray-500">From Checking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Credit Card Payment</h3>
                      <p className="text-sm text-gray-500">May 10, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-500">-$500.00</p>
                      <p className="text-sm text-gray-500">From Checking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Interest Payment</h3>
                      <p className="text-sm text-gray-500">May 1, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-500">+$32.45</p>
                      <p className="text-sm text-gray-500">To Savings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">New Credit Card Added</h3>
                      <p className="text-sm text-gray-500">April 28, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Travel Credit Card</p>
                      <p className="text-sm text-gray-500">Account Change</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
