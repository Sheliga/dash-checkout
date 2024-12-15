"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Inputs ShadCN
import { QRCodeSVG } from "qrcode.react"; // QRCode
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import ProductList from "@/components/ProductList";
import SelectedProducts from "@/components/SelectedProducts";
import { SelectProduct } from "@/lib/slugProducts";

export default function CheckoutPage() {
  const [selectedProducts, setSelectedProducts] = useState<SelectProduct[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleSelectProduct = (product: SelectProduct) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#121212] text-white">
      {/* Lista de Produtos */}
      <ProductList category="tech" onSelectProduct={handleSelectProduct} />

      {/* Resumo do Pedido e Formulário de Pagamento */}
      <div>
        <SelectedProducts products={selectedProducts} />

        <Card className="bg-[#2B2B2B] p-6 rounded-lg mt-8">
          <h2 className="text-xl font-bold mb-4">Pagamento</h2>
          <Tabs defaultValue="credit-card">
            <TabsList className="flex justify-around mb-4">
              <TabsTrigger value="credit-card">Cartão</TabsTrigger>
              <TabsTrigger value="pix">PIX</TabsTrigger>
              <TabsTrigger value="boleto">Boleto</TabsTrigger>
            </TabsList>
            {/* Cartão */}
            <TabsContent value="credit-card">
              <Input placeholder="Nome no cartão" className="mb-2" />
              <Input placeholder="Número do cartão" className="mb-2" />
              <div className="flex gap-2">
                <Input placeholder="MM/AA" />
                <Input placeholder="CVV" />
              </div>
              <Button className="w-full mt-4 bg-[#8A3FFC] hover:bg-[#3BD87E]">
                Finalizar Pagamento
              </Button>
            </TabsContent>
            {/* PIX */}
            <TabsContent value="pix" className="text-center">
              <QRCodeSVG
                value="https://pix.example.com"
                className="mx-auto mb-4"
              />
              <Button>Copiar Código PIX</Button>
            </TabsContent>
            {/* Boleto */}
            <TabsContent value="boleto" className="text-center">
              <div className="bg-gray-700 p-4 rounded-lg mb-4">
                1234.5678.9012.3456
              </div>
              <Button>Baixar Boleto</Button>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
