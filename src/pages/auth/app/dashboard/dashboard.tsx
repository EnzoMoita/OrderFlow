import { Helmet } from "react-helmet-async"
import { MonthRevenueCard } from "./month-revenue-card"
import { MonthOrdersAmountCard } from "./month-orders-amont-card"
import { DayOrdersAmountCard } from "./day-orders-amont-card"
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amont"


export function Dashboard(){
    return   ( 
    <>
    <Helmet title="Dashboard" />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

            <div className="grid grid-cols-4 gap-4">
            <MonthRevenueCard />
            <MonthOrdersAmountCard />
            <DayOrdersAmountCard />
            <MonthCanceledOrdersAmountCard />
            </div>
        </div>
</> 
    )
}