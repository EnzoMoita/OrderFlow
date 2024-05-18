import { api } from "@/lib/axios";

export interface getMonthCanceledOrdersAmontResponse{
    amount: number
    diffFromLastMonth: number
}


export async function getMonthCanceledOrdersAmont(){
    const response = await api.get<getMonthCanceledOrdersAmontResponse>('/metrics/month-canceled-orders-amount')

    return response.data
}