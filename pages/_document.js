import React from 'react';
import Document ,{Head,Html,Main,NextScript} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';


export default class MyDocument extends Document{
     render(){
        return(
            <Html lang='pt-br'>
                <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
     }
}

MyDocument.getInitialProps = async (value) =>{

    const originalRenderPage = value.renderPage
    const cache = createCache({key:'css'})
    const {extractCriticalToChunks} = createEmotionServer(cache)

    value.renderPage = ()=> originalRenderPage({
        enhanceApp : (App) =>(props) => <App emotionCache={cache} {...props} />
    })

    const initalProps = await Document.getInitialProps(value)
    const emotionStyles = extractCriticalToChunks(initalProps.html)

    const emotionStyleTags = emotionStyles.styles.map((style) =>(
        <style
            data-emotion={`${style.key} ${style.ids.join('')}`}
            key={style.key}
            dangerouslySetInnerHTML={{__html:style.css}}
        />
    ));
    return{
        ...initalProps,
        ...React.Children.toArray(initalProps.styles),
        ...emotionStyleTags,
    }
}