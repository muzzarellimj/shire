import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

export default function Shire({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}