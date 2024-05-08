import { Button } from "@/components/ui/button"
import { Dialog , DialogTrigger } from "@/components/ui/dialog"
import { TableRow, TableCell } from "@/components/ui/table"
import { ArrowRight, X, Search} from "lucide-react"
import { OrderDetails } from "./order-details"


// export interface OrderTableRowProps {}

export function OrderTableRow() { 
return(
    <TableRow>
    <TableCell>
        <Dialog> 
            <DialogTrigger asChild>
            <Button variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
        </Button>
        </DialogTrigger>
        <OrderDetails />

        </Dialog>
    </TableCell>
    <TableCell className="font-mono text-xs font-medium">
        er2rr2r2r
        </TableCell>
    <TableCell className="text-muted-foreground">
         Há 15 minutos
    </TableCell>
    <TableCell>
        <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400"/>
        <span className="font-medium text-muted-foreground">
            Pendente
        </span>
        </div>
    </TableCell>
    <TableCell className="font-medium">
        Enzo Salomão Dourado
    </TableCell>
    <TableCell className="font-medium">R$149,00</TableCell>
    <TableCell>
    <Button variant="outline" size="xs">
            <ArrowRight className="h-3 w-3 mr-2" />
            Aprovar
        </Button>
    </TableCell>
    <TableCell>
    <Button variant="ghost" size="xs">
            <X className="h-3 w-3 mr-2" />
            Cancelar
        </Button>
    </TableCell>
    </TableRow>
)

}