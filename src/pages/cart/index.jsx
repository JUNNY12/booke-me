import { DefaultLayout } from '@/components/layouts';
import { CartContainer, RelatedBooks } from '@/components/templates/cart';

const Cart = () => {
    return (
        <div className=" bg-white-100">
            <DefaultLayout>
                <CartContainer />
                <div className="mx-8 tabletL:mx-4 mt-20">
                    <RelatedBooks />
                </div>
            </DefaultLayout>
        </div>
    );
};

export default Cart;
