import { configureStore } from '@reduxjs/toolkit'

import reducer from 'store/reducer'

export default () => configureStore({ reducer })
