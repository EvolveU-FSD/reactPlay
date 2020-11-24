import rawDefaultHi from './defaultExport.js'

rawDefaultHi()


import * as inlineExportFunctions from './inlineExport.js'
inlineExportFunctions.inlineHi()

import {inlineHi} from './inlineExport.js'
inlineHi()

import spreadExport from './spreadExport.js'
spreadExport.firstSpreadHi()
spreadExport.secondSpreadHi()