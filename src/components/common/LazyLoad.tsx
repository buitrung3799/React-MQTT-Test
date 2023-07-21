/* eslint-disable eqeqeq */
import React from "react"

const Loading = (
  <div className="m-2">
    <h2>Loading.... </h2>
  </div>
)

const LazyLoad = (importFunc: any) => {
  const Component = React.lazy(importFunc)
  return (props: any) => (
    <div>
      <React.Suspense fallback={Loading}>
        <Component {...props} />
      </React.Suspense>
    </div>
  )
}

export default LazyLoad
