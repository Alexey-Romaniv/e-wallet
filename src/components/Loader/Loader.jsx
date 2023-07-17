import {Backdrop} from "@mui/material";

import { Watch } from  'react-loader-spinner'

export const Loader = () => {
    return <Backdrop open={true} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}} onClick={e => e.stopPropagation()}>
        <Watch
            height="200"
            width="2000"
            radius="48"
            color="blue"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />    </Backdrop>

}