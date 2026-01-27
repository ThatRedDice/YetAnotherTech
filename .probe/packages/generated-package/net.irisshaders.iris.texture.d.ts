declare module "net.irisshaders.iris.texture.SpriteContentsExtension" {
import {$SpriteContents$Ticker, $SpriteContents$Ticker$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"

export interface $SpriteContentsExtension$$Interface {

(): $SpriteContents$Ticker$$Type
get "createdTicker"(): $SpriteContents$Ticker
}

export class $SpriteContentsExtension implements $SpriteContentsExtension$$Interface {
 "getCreatedTicker"(): $SpriteContents$Ticker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = (() => $SpriteContents$Ticker$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtension$$Original = $SpriteContentsExtension;}
