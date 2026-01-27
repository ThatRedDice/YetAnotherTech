declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
import {$AccessoriesFrameBufferExtension$$Interface} from "io.wispforest.accessories.pond.AccessoriesFrameBufferExtension"
import {$Blaze3dRenderTargetExt$$Interface} from "net.irisshaders.iris.targets.Blaze3dRenderTargetExt"

export class $RenderTarget implements $Blaze3dRenderTargetExt$$Interface, $AccessoriesFrameBufferExtension$$Interface {
readonly "useDepth": boolean
 "filterMode": integer
 "viewWidth": integer
 "frameBufferId": integer
 "width": integer
 "viewHeight": integer
 "height": integer

constructor(arg0: boolean)

public "clear"(arg0: boolean): void
public "resize"(arg0: integer, arg1: integer, arg2: boolean): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "checkStatus"(): void
public "bindWrite"(arg0: boolean): void
public "unbindWrite"(): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
public "destroyBuffers"(): void
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "unbindRead"(): void
public "copyDepthFrom"(arg0: $RenderTarget$$Type): void
public "setFilterMode"(arg0: integer): void
public "bindRead"(): void
public "getColorTextureId"(): integer
public "getDepthTextureId"(): integer
public "enableStencil"(): void
public "isStencilEnabled"(): boolean
public "iris$getDepthBufferVersion"(): integer
public "iris$getColorBufferVersion"(): integer
public "accessories$setUseHighlightShader"(useHighlightShader: boolean): void
get "colorTextureId"(): integer
get "depthTextureId"(): integer
get "stencilEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTarget$$Type = ($RenderTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTarget$$Original = $RenderTarget;}
