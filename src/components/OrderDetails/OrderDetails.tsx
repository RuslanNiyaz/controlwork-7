import { FC } from "react";

interface OrderItemProps {
    order: {
        id?: string;
        name: string;
        count: number;
        price: number;
    };
    removeItem: (id: string | undefined) => void;
}

const OrderDetails: FC<OrderItemProps> = ({ order, removeItem }) => {
    return (
        <div key={order.id} className="orderDetailsMenu">
            <button className="removeBtn" onClick={() => removeItem(order.id)}>Delete</button>
            <p className="orderItems">
                <span>{order.name}</span> x{order.count} <strong>{order.price} KGS</strong>
            </p>
        </div>
    );
};
export default OrderDetails;
