import dynamic from 'next/dynamic'
import { AwaitedReactNode, Fragment, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'

function NoSsr(props: { children: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) {
    return (<Fragment>{props.children}</Fragment>)
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})