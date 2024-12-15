import React from "react";
import { slugProductMap, SelectProduct } from "@/lib/slugProducts";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductListProps {
  category: string;
  onSelectProduct: (product: SelectProduct) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  category,
  onSelectProduct,
}) => {
  const products = slugProductMap[category] || [];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="bg-[#2B2B2B] p-4 rounded-lg mb-4">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full mb-4 rounded-lg"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="font-semibold">{formatCurrency(product.price)}</p>
          <p>Estoque: {product.stock}</p>
          <Button
            className="mt-2 bg-[#8A3FFC] hover:bg-[#3BD87E]"
            onClick={() => onSelectProduct(product)}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
