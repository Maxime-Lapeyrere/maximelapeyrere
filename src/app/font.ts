import { Montserrat, Big_Shoulders_Inline_Display, Big_Shoulders_Display } from 'next/font/google';
 


export const montserrat = Montserrat(
    { 
      subsets: ['latin'], 
      weight:["400", "700"], 
      display: 'swap',
      
    }
    )
export const bsid = Big_Shoulders_Inline_Display(
    { 
      subsets: ['latin'], 
      display: 'swap',
    }
    )
export const bsd = Big_Shoulders_Display(
    { 
      subsets: ['latin'],
      display: 'swap',
    }
    )