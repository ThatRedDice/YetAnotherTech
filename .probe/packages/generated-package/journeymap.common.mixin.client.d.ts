declare module "journeymap.common.mixin.client.ScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ScreenAccessor$$Interface {

(arg0: boolean): void
set "initialized"(value: boolean)
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "setInitialized"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "journeymap.common.mixin.client.EditBoxAccessor" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $EditBoxAccessor$$Interface {
get "textColor"(): integer
get "editable"(): boolean
get "uneditableTextColor"(): integer
get "suggestion"(): StringJS
get "hint"(): $Component
get "focusTime"(): long
get "highlightPos"(): integer
get "formatter"(): $BiFunction<(StringJS), (integer), ($FormattedCharSequence)>
}

export class $EditBoxAccessor implements $EditBoxAccessor$$Interface {
 "getTextColor"(): integer
 "isEditable"(): boolean
 "getUneditableTextColor"(): integer
 "getSuggestion"(): StringJS
 "getHint"(): $Component
 "getFocusTime"(): long
 "getHighlightPos"(): integer
 "invokeRenderHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "maxLength"(): integer
 "getFormatter"(): $BiFunction<(StringJS), (integer), ($FormattedCharSequence)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditBoxAccessor$$Type = ($EditBoxAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EditBoxAccessor$$Original = $EditBoxAccessor;}
declare module "journeymap.common.mixin.client.LiquidBlockAccessor" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $LiquidBlockAccessor$$Interface {

(): $FlowingFluid$$Type
get "fluid"(): $FlowingFluid
}

export class $LiquidBlockAccessor implements $LiquidBlockAccessor$$Interface {
 "getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockAccessor$$Type = (() => $FlowingFluid$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlockAccessor$$Original = $LiquidBlockAccessor;}
declare module "journeymap.common.mixin.client.AgeableListModelInvoker" {
import {$Iterable} from "java.lang.Iterable"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"

export interface $AgeableListModelInvoker$$Interface {
get "headParts"(): $Iterable<($ModelPart)>
get "bodyParts"(): $Iterable<($ModelPart)>
}

export class $AgeableListModelInvoker implements $AgeableListModelInvoker$$Interface {
 "getHeadParts"(): $Iterable<($ModelPart)>
 "getBodyParts"(): $Iterable<($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListModelInvoker$$Type = ($AgeableListModelInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgeableListModelInvoker$$Original = $AgeableListModelInvoker;}
declare module "journeymap.common.mixin.client.BiomeInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeInvoker$$Interface {

(): integer
}

export class $BiomeInvoker implements $BiomeInvoker$$Interface {
 "invokeGetGrassColorFromTexture"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeInvoker$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeInvoker$$Original = $BiomeInvoker;}
declare module "journeymap.common.mixin.client.ModelPartMixin" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartMixin$$Interface {

(): $Map$$Type<(StringJS), ($ModelPart$$Type)>
get "children"(): $Map<(StringJS), ($ModelPart)>
}

export class $ModelPartMixin implements $ModelPartMixin$$Interface {
 "getChildren"(): $Map<(StringJS), ($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartMixin$$Type = (() => $Map$$Type<(StringJS), ($ModelPart$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartMixin$$Original = $ModelPartMixin;}
