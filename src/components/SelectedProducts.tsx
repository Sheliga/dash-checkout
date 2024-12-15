import React from "react";
import { SelectProduct } from "@/lib/slugProducts";
import { formatCurrency } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface SelectedProductsProps {
  products: SelectProduct[];
}

const SelectedProducts: React.FC<SelectedProductsProps> = ({ products }) => {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <Card className="bg-[#2B2B2B] p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between py-2">
            <span>{product.name}</span>
            <span>{formatCurrency(product.price)}</span>
          </li>
        ))}
        <li className="flex justify-between py-2 border-b">
          <span>Frete</span>
          <span>{formatCurrency(10)}</span>
        </li>
      </ul>
      <div className="flex justify-between text-xl font-bold mt-4">
        <span>Total</span>
        <span className="text-green-400">{formatCurrency(total + 10)}</span>
      </div>
    </Card>
  );
};

export default SelectedProducts;
