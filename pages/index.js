import React, { useState } from 'react';
import { Page, EmptyState , Layout} from "@shopify/polaris";
import {
  PlusMinor
} from '@shopify/polaris-icons';
import {ResourcePicker} from '@shopify/app-bridge-react';

const Index = () => {
  const [open, setopen] = useState(false);
  const [sproducts, setsproducts] = useState(null);
  const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
  return(
  <Page
  fullWidth
  title="Products"
  //primaryAction={{content: 'Add Product', icon: PlusMinor, onAction: ()=> setopen(true)}}
  //secondaryActions={[{content: 'Export'}]}
  pagination={{
    hasNext: true,
  }}
  >
  <Layout>
  <EmptyState // Empty state component
        heading="Discount your products temporarily"
        action={{
          content: 'Select products',
          onAction: () => setopen(true),
          onCancel: () => setsproducts(null),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
  <ResourcePicker resourceType="Product" open={open} onCancel={()=>setopen(false)} onSelection={({selection})=>setsproducts(selection)} />
    {sproducts? sproducts.map(({title})=><li>{title}</li>) : "---"}
    </Layout>
</Page>
)};

export default Index;
