import Document, { Html, Head, Main, NextScript } from 'next/document';
import "../assets/css/style.scss"
class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
                    {/*<script src="https://www.paypalobjects.com/api/checkout.js" />*/}
                    <script src="https://www.paypal.com/sdk/js?client-id=AU2GLhS-ylt39bl3oXEwZvRDx-UlE6hv8Y79P5xvqFNKG6gctm3-u3VjNq0yj1atgO9rPOdJPleb48oZ" />

                    <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;