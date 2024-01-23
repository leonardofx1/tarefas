import { getSession } from "next-auth/react"

export async function getServerSideProps(context) {
    const session = await getSession(context)
    
    if (!session) {
      return {
        redirect: {
          destination: '/login', // redireciona para a página de login
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }, // passando os dados da sessão
    }
  }