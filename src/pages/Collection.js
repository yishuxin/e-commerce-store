import React from 'react';
import { ProductsContext } from '../context/ProductContext';
import TextSection from '../components/SingleProduct/TextSection';
import ImageSection from '../components/SingleProduct/ImageSection';
import SidebarSection from '../components/SingleProduct/SidebarSection';
import GalleryNav from '../components/SingleProduct/GalleryNav';
import ProductNav from '../components/Nav/ProductNav';

class Container extends React.Component {
  static contextType = ProductsContext;

  render() {
    const { products, counter } = this.context;
    const titles = products.map(product => product.name);
    const description = products.map(product => product.description);
    const images = products.map(product => product.images[0]);
    const id = products.map(product => product.id);
    const slugs = products.map(product => product.slug);
    const inCart = products.map(product => product.inCart);
    return (
      <>
        <div className='flex relative h-screen w-screen overflow-hidden'>
          <ProductNav />
          <TextSection
            title={titles[counter]}
            description={description[counter]}
            slug={slugs[counter]}
          />
          <ImageSection image={images[counter]} />
          <SidebarSection />
        </div>
        <GalleryNav
          counter={counter + 1}
          id={id[counter]}
          inCart={inCart[counter]}
        />
      </>
    );
  }
}

export default Container;
