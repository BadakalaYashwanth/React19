// Create ProductList Component.
//
// Purpose:
//
// Display products
// based on the search value
// received from the parent.
function ProductList({

    search

}) {

    // Example product list.
    //
    // Normally this data
    // comes from an API
    // or database.
    const products = [

        "Laptop",

        "Keyboard",

        "Mouse",

        "Monitor",

        "Headphones"

    ];



    // Filter the products.
    //
    // Purpose:
    //
    // Show only products
    // that match the
    // search text.
    //
    // includes()
    //
    // Returns true if
    // the product contains
    // the search word.
    //
    // Example
    //
    // search
    //
    // "lap"
    //
    // Result
    //
    // Laptop
    const filteredProducts = products.filter(product =>

        product

            .toLowerCase()

            .includes(

                search.toLowerCase()

            )

    );



    return (

        <div>

            {/*

                Loop through
                every filtered product.

                React creates one

                <p>

                for every product.

            */}
            {filteredProducts.map(product => (

                // key

                // Helps React identify
                // each element during
                // Reconciliation.
                <p key={product}>

                    {/*

                        Display
                        the product name.

                    */}
                    {product}

                </p>

            ))}

        </div>

    );

}

export default ProductList;