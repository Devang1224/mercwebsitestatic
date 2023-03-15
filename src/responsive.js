import {css} from 'styled-components'



export const tablet = (props)=>{
     
return css`

@media only screen and (max-width:837px)
{
      ${props}
}

`

}


export const mobile = (props)=>{
     
    return css`
    
    @media only screen and (max-width:570px)
    {
          ${props}
    }
    
    `
    
    }
   
    export const tablet1 = (props)=>{
     
      return css`
      
      @media only screen and (max-width:1060px)
      {
            ${props}
      }
      
      `
      
      }
  export const mobile2 = (props)=>{
      return css`
      
      @media only screen and (max-width:640px)
      {
            ${props}
      }
      
      `
  }

  export const mobile3 = (props)=>{
      
      return css`
      
      @media only screen and (max-width:760px)
      {
            ${props}
      }
      
      `
  }

