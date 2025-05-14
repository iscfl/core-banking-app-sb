import Link from "next/link"
import {
  ArrowUpRight,
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

export default function DashboardPage() {
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
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-emerald-600 transition-all hover:text-emerald-700"
              >
                <BarChart3 className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/accounts"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-emerald-600"
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
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John</h1>
              <p className="text-gray-500">Here's an overview of your finances</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Balance</CardDescription>
                  <CardTitle className="text-3xl">$24,563.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-green-500">+2.5% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Income</CardDescription>
                  <CardTitle className="text-3xl">$8,350.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-green-500">+4.3% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Expenses</CardDescription>
                  <CardTitle className="text-3xl">$3,285.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-red-500">+1.2% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Savings</CardDescription>
                  <CardTitle className="text-3xl">$5,065.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-green-500">+7.5% from last month</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Spending Overview</CardTitle>
                    <CardDescription>Your spending patterns over time</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-lg bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Spending chart visualization</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Your Accounts</CardTitle>
                  <CardDescription>Manage your accounts and cards</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Wallet className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Checking Account</h3>
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
                      <h3 className="font-semibold">Savings Account</h3>
                      <p className="text-sm text-gray-500">**** 7291</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$8,765.43</p>
                      <p className="text-sm text-gray-500">Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <CreditCard className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Credit Card</h3>
                      <p className="text-sm text-gray-500">**** 5678</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$3,452.90</p>
                      <p className="text-sm text-gray-500">Available</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Account
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest financial activities</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Grocery Store</h3>
                      <p className="text-sm text-gray-500">May 12, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-500">-$85.32</p>
                      <p className="text-sm text-gray-500">Checking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Salary Deposit</h3>
                      <p className="text-sm text-gray-500">May 10, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-500">+$3,500.00</p>
                      <p className="text-sm text-gray-500">Checking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Electric Bill</h3>
                      <p className="text-sm text-gray-500">May 8, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-500">-$142.50</p>
                      <p className="text-sm text-gray-500">Checking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Restaurant</h3>
                      <p className="text-sm text-gray-500">May 7, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-500">-$65.80</p>
                      <p className="text-sm text-gray-500">Credit Card</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Transfer to Savings</h3>
                      <p className="text-sm text-gray-500">May 5, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-500">-$500.00</p>
                      <p className="text-sm text-gray-500">Checking</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    View All Transactions
                  </Button>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Bills</CardTitle>
                  <CardDescription>Bills due in the next 30 days</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">Rent Payment</h3>
                      <p className="text-sm text-gray-500">Due in 3 days</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$1,200.00</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Pay Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">Internet Bill</h3>
                      <p className="text-sm text-gray-500">Due in 7 days</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$79.99</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Pay Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">Phone Bill</h3>
                      <p className="text-sm text-gray-500">Due in 12 days</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$55.00</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Pay Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">Credit Card Payment</h3>
                      <p className="text-sm text-gray-500">Due in 15 days</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$350.00</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Pay Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Bill Reminder
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
