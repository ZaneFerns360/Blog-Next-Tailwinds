import 'style/global.css';
import Nav from 'components/Nav';
export const metadata ={
    title:"Devcut",
    description:"Discover and share AI-generated prompts for your next creative project."
}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
              <Nav/>
               {children}

                </main>
                
        </body>
        </html>
  )
}

export default RootLayout;