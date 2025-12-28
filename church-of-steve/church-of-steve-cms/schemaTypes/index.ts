// Explicit extensions help Vite resolve modules outside the Studio folder.
import tenet from '../sanity-schemas/tenet.ts'
import miracle from '../sanity-schemas/miracle.ts'
import shopItem from '../sanity-schemas/shopItem.ts'
import event from '../sanity-schemas/event.ts'
import galleryImage from '../sanity-schemas/galleryImage.ts'

// Keep schema definitions in the root folder so the frontend and Studio stay in sync
// (single source of truth for content types).
export const schemaTypes = [tenet, miracle, shopItem, event, galleryImage]
