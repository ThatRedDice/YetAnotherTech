declare module "journeymap.client.texture.TextureAccess" {
import {$DynamicTexture, $DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"

export interface $TextureAccess$$Interface {
}

export class $TextureAccess implements $TextureAccess$$Interface {
 "journeymap$getWidth"(): integer
 "journeymap$hasImage"(): boolean
 "journeymap$getHeight"(): integer
 "journeymap$setDisplayWidth"(arg0: integer): void
 "journeymap$setDisplayHeight"(arg0: integer): void
 "journeymap$getScaledImage"(arg0: float): $DynamicTexture
 "journeymap$putScale"(arg0: float, arg1: $DynamicTexture$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAccess$$Type = ($TextureAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAccess$$Original = $TextureAccess;}
