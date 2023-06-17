
import { Watch } from  'react-loader-spinner'

export const Loader = () => {
    return <Watch
        height="200"
        width="2000"
        radius="48"
        color="blue"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />
}