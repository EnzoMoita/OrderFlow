import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { getOrders } from "@/api/get-orders";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders(){
    const [seachParams, setSeachParams] = useSearchParams()

    const orderId = seachParams.get('orderId')
    const customerName = seachParams.get('customerName')
    const status = seachParams.get('status')


    const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(seachParams.get('page') ?? '1')

    const {data: result} = useQuery({
        queryKey: ['orders', pageIndex, orderId, customerName, status],
        queryFn: () => getOrders({ pageIndex, orderId, customerName, status: status === 'all' ? null: status }),
    })


    function handlePaginate(pageIndex: number) {
        setSeachParams((state) => {
            state.set('page', (pageIndex + 1).toString())

            return state
        })
    }

    return (
        <>
        <Helmet title="Pedidos" />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        
        <div className="space-y-2.5">
            <OrderTableFilters />
            <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[64px]"></TableHead>
                        <TableHead className="w-[140px]">Identificador</TableHead>
                        <TableHead className="w-[180px]">Realizado há</TableHead>
                        <TableHead className="w-[140px]">Status</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead className="w-[140px]">Total do pedido</TableHead>
                        <TableHead className="w-[164px]"></TableHead>
                        <TableHead className="w-[132px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {result && result.orders.map(order =>{
                    return <OrderTableRow key={order.orderId} order={order} />
                })}
                </TableBody>
            </Table>
                </div>

                {result && (
                    <Pagination 
                    onPageChange={handlePaginate}
                    pageIndex={result.meta.pageIndex} 
                    totalCount={result.meta.totalCount} 
                    perPage={result.meta.perPage}/>

                )}
            </div>
        </div>
        </>
    )
}
