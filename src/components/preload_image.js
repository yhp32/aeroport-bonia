import { Image as ThemedImage } from 'theme-ui'
// this function let us get a new function using the asyncFn we pass
// this function also receives a payload and return us a resource with
// that payload assigned as type
const createResource = (asyncFn) => {
  // we start defining our resource is on a pending status
  let status = 'pending'
  // and we create a variable to store the result
  let result
  // then we immediately start running the `asyncFn` function
  // and we store the resulting promise
  const promise = asyncFn().then(
    (payload) => {
      // once it's fulfilled we change the status to success
      // and we save the returned value as result
      status = 'success'
      result = payload
    },
    (error) => {
      // once it's rejected we change the status to error
      // and we save the returned error as result
      status = 'error'
      result = error
    }
  )

  return {
    read() {
      switch (status) {
        case 'pending':
          // if it's still pending we throw the promise
          // throwing a promise is how Suspense know our component is not ready
          throw promise
        case 'error':
          throw result
        case 'success':
          return result
        default:
          return null
      }
    }
  }
}

// First we need a type of cache to avoid creating resources for images
// we have already fetched in the past
const cache = new Map()

// then we create our loadImage function, this function receives the source
// of the image and returns a resource
const loadImage = (source) => {
  // here we start getting the resource from the cache
  let resource = cache.get(source)
  // and if it's there we return it immediately
  if (resource) return resource
  // but if it's not we create a new resource
  resource = createResource(
    () =>
      // in our async function we create a promise
      new Promise((resolve, reject) => {
        // then create a new image element
        const img = new window.Image()
        // set the src to our source
        img.src = source
        // and start listening for the load event to resolve the promise
        img.addEventListener('load', () => resolve(source))
        // and also the error event to reject the promise
        img.addEventListener('error', () => reject(new Error(`Failed to load image ${source}`)))
      })
  )
  // before finishing we save the new resource in the cache
  cache.set(source, resource)
  // and return return it
  return resource
}

const SuspenseImage = (props) => {
  loadImage(props.src).read()
  return <ThemedImage {...props} alt="" draggable={false} />
  // return <img {...props} alt="" draggable={false} />
}

export default SuspenseImage
