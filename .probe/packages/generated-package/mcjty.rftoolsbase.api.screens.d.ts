declare module "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$FormatStyle$$Type} from "mcjty.rftoolsbase.api.screens.FormatStyle"
import {$Level} from "net.minecraft.world.level.Level"
import {$BarMode$$Type} from "mcjty.rftoolsbase.api.screens.BarMode"
import {$IModuleGuiBuilder$Choice$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder$Choice"

export interface $IModuleGuiBuilder$$Interface {
get "world"(): $Level
get "currentModule"(): $ItemStack
}

export class $IModuleGuiBuilder implements $IModuleGuiBuilder$$Interface {
 "getWorld"(): $Level
 "toggle"(arg0: $BiConsumer$$Type<($ItemStack), (boolean)>, arg1: $Function$$Type<($ItemStack), (boolean)>, arg2: StringJS, ...arg3: (StringJS)[]): $IModuleGuiBuilder
 "toggleNegative"(arg0: $BiConsumer$$Type<($ItemStack), (boolean)>, arg1: $Function$$Type<($ItemStack), (boolean)>, arg2: StringJS, ...arg3: (StringJS)[]): $IModuleGuiBuilder
 "choices"(arg0: $BiConsumer$$Type<($ItemStack), (integer)>, arg1: $Function$$Type<($ItemStack), (integer)>, ...arg2: ($IModuleGuiBuilder$Choice$$Type)[]): $IModuleGuiBuilder
 "choices"(arg0: $BiConsumer$$Type<($ItemStack), (StringJS)>, arg1: $Function$$Type<($ItemStack), (StringJS)>, arg2: StringJS, ...arg3: (StringJS)[]): $IModuleGuiBuilder
 "label"(arg0: StringJS): $IModuleGuiBuilder
 "mode"(arg0: $BiConsumer$$Type<($ItemStack), ($BarMode)>, arg1: $Function$$Type<($ItemStack), ($BarMode$$Type)>, arg2: StringJS): $IModuleGuiBuilder
 "format"(arg0: $BiConsumer$$Type<($ItemStack), ($FormatStyle)>, arg1: $Function$$Type<($ItemStack), ($FormatStyle$$Type)>): $IModuleGuiBuilder
 "nl"(): $IModuleGuiBuilder
 "color"(arg0: $BiConsumer$$Type<($ItemStack), (integer)>, arg1: $Function$$Type<($ItemStack), (integer)>, ...arg2: (StringJS)[]): $IModuleGuiBuilder
 "block"(arg0: $Function$$Type<($ItemStack), ($GlobalPos$$Type)>, arg1: $Function$$Type<($ItemStack), (StringJS)>): $IModuleGuiBuilder
 "text"(arg0: $BiConsumer$$Type<($ItemStack), (StringJS)>, arg1: $Function$$Type<($ItemStack), (StringJS)>, ...arg2: (StringJS)[]): $IModuleGuiBuilder
 "integer"(arg0: $BiConsumer$$Type<($ItemStack), (integer)>, arg1: $Function$$Type<($ItemStack), (integer)>, ...arg2: (StringJS)[]): $IModuleGuiBuilder
 "getCurrentModule"(): $ItemStack
 "leftLabel"(arg0: StringJS): $IModuleGuiBuilder
 "ghostStack"(arg0: $BiConsumer$$Type<($ItemStack), ($ItemStack)>, arg1: $Function$$Type<($ItemStack), ($ItemStack$$Type)>): $IModuleGuiBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleGuiBuilder$$Type = ($IModuleGuiBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleGuiBuilder$$Original = $IModuleGuiBuilder;}
declare module "mcjty.rftoolsbase.api.screens.IClientScreenModule" {
import {$IClientScreenModule$TransformMode} from "mcjty.rftoolsbase.api.screens.IClientScreenModule$TransformMode"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ModuleRenderInfo$$Type} from "mcjty.rftoolsbase.api.screens.ModuleRenderInfo"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$IModuleData, $IModuleData$$Type} from "mcjty.rftoolsbase.api.screens.data.IModuleData"
import {$IModuleRenderHelper$$Type} from "mcjty.rftoolsbase.api.screens.IModuleRenderHelper"

export interface $IClientScreenModule$$Interface<T extends $IModuleData> {
}

export class $IClientScreenModule<T extends $IModuleData> implements $IClientScreenModule$$Interface {
 "needsServerData"(): boolean
 "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean): void
 "getTransformMode"(arg0: $ItemStack$$Type): $IClientScreenModule$TransformMode
 "getHeight"(arg0: $ItemStack$$Type): integer
 "render"(arg0: $GuiGraphics$$Type, arg1: $MultiBufferSource$$Type, arg2: $IModuleRenderHelper$$Type, arg3: $Font$$Type, arg4: integer, arg5: T, arg6: $ModuleRenderInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientScreenModule$$Type<T> = ($IClientScreenModule<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientScreenModule$$Original<T> = $IClientScreenModule<(T)>;}
declare module "mcjty.rftoolsbase.api.screens.TextAlign" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $TextAlign extends $Enum<($TextAlign)> implements $StringRepresentable$$Interface {
static readonly "ALIGN_CENTER": $TextAlign
static readonly "CODEC": $Codec<($TextAlign)>
static readonly "ALIGN_RIGHT": $TextAlign
static readonly "ALIGN_LEFT": $TextAlign
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TextAlign)>

public static "get"(arg0: StringJS): $TextAlign
public static "values"(): ($TextAlign)[]
public static "valueOf"(arg0: StringJS): $TextAlign
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextAlign$$Type = (("left") | ("center") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextAlign$$Original = $TextAlign;}
declare module "mcjty.rftoolsbase.api.screens.IModuleProvider" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"

export interface $IModuleProvider$$Interface {
get "moduleName"(): StringJS
}

export class $IModuleProvider implements $IModuleProvider$$Interface {
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
 "createClientScreenModule"(): $IClientScreenModule<(never)>
 "createServerScreenModule"(): $IScreenModule<(never), (never)>
 "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
 "getModuleName"(): StringJS
 "codec"(): $Codec<($IScreenModule<(never), (never)>)>
 "createGui"(arg0: $IModuleGuiBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleProvider$$Type = ($IModuleProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleProvider$$Original = $IModuleProvider;}
declare module "mcjty.rftoolsbase.api.screens.ITextRenderHelper" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ModuleRenderInfo$$Type} from "mcjty.rftoolsbase.api.screens.ModuleRenderInfo"

export interface $ITextRenderHelper$$Interface {
get "dirty"(): void
get "text"(): StringJS
}

export class $ITextRenderHelper implements $ITextRenderHelper$$Interface {
 "setDirty"(): void
 "large"(arg0: boolean): $ITextRenderHelper
 "getAlign"(): $TextAlign
 "isLarge"(): boolean
 "renderText"(arg0: $GuiGraphics$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ModuleRenderInfo$$Type): void
 "setup"(arg0: StringJS, arg1: integer, arg2: $ModuleRenderInfo$$Type): void
 "getText"(): StringJS
 "align"(arg0: $TextAlign$$Type): $ITextRenderHelper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextRenderHelper$$Type = ($ITextRenderHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITextRenderHelper$$Original = $ITextRenderHelper;}
declare module "mcjty.rftoolsbase.api.screens.data.IModuleData" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $IModuleData$$Interface {
get "id"(): StringJS
}

export class $IModuleData implements $IModuleData$$Interface {
 "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleData$$Type = ($IModuleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleData$$Original = $IModuleData;}
declare module "mcjty.rftoolsbase.api.screens.data.IModuleDataString" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IModuleData$$Interface} from "mcjty.rftoolsbase.api.screens.data.IModuleData"

export interface $IModuleDataString$$Interface extends $IModuleData$$Interface {
get "id"(): StringJS
}

export class $IModuleDataString implements $IModuleDataString$$Interface {
 "get"(): StringJS
 "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataString$$Type = ($IModuleDataString);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleDataString$$Original = $IModuleDataString;}
declare module "mcjty.rftoolsbase.api.screens.FormatStyle" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FormatStyle extends $Enum<($FormatStyle)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($FormatStyle)>
static readonly "MODE_COMMAS": $FormatStyle
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($FormatStyle)>
static readonly "MODE_FULL": $FormatStyle
static readonly "MODE_COMPACT": $FormatStyle

public "getName"(): StringJS
public static "values"(): ($FormatStyle)[]
public static "valueOf"(arg0: StringJS): $FormatStyle
public "getSerializedName"(): StringJS
public static "getStyle"(arg0: StringJS): $FormatStyle
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatStyle$$Type = (("full") | ("compact") | ("commas"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormatStyle$$Original = $FormatStyle;}
declare module "mcjty.rftoolsbase.api.screens.IModuleRenderHelper" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ModuleRenderInfo$$Type} from "mcjty.rftoolsbase.api.screens.ModuleRenderInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$FormatStyle$$Type} from "mcjty.rftoolsbase.api.screens.FormatStyle"
import {$ITextRenderHelper} from "mcjty.rftoolsbase.api.screens.ITextRenderHelper"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$ILevelRenderHelper} from "mcjty.rftoolsbase.api.screens.ILevelRenderHelper"
import {$IModuleDataContents$$Type} from "mcjty.rftoolsbase.api.screens.data.IModuleDataContents"

export interface $IModuleRenderHelper$$Interface {
}

export class $IModuleRenderHelper implements $IModuleRenderHelper$$Interface {
 "createTextRenderHelper"(): $ITextRenderHelper
 "createLevelRenderHelper"(): $ILevelRenderHelper
 "renderTextTrimmed"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ModuleRenderInfo$$Type, arg6: StringJS, arg7: integer): void
 "renderText"(arg0: $GuiGraphics$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ModuleRenderInfo$$Type, arg6: StringJS): void
 "format"(arg0: StringJS, arg1: $FormatStyle$$Type): StringJS
/**
 * 
 * @deprecated
 */
 "renderLevel"(arg0: $GuiGraphics$$Type, arg1: $MultiBufferSource$$Type, arg2: $Font$$Type, arg3: integer, arg4: integer, arg5: $IModuleDataContents$$Type, arg6: StringJS, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $FormatStyle$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleRenderHelper$$Type = ($IModuleRenderHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleRenderHelper$$Original = $IModuleRenderHelper;}
declare module "mcjty.rftoolsbase.api.screens.ILevelRenderHelper" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ModuleRenderInfo$$Type} from "mcjty.rftoolsbase.api.screens.ModuleRenderInfo"
import {$FormatStyle, $FormatStyle$$Type} from "mcjty.rftoolsbase.api.screens.FormatStyle"
import {$BarMode, $BarMode$$Type} from "mcjty.rftoolsbase.api.screens.BarMode"
import {$IModuleDataContents$$Type} from "mcjty.rftoolsbase.api.screens.data.IModuleDataContents"

export interface $ILevelRenderHelper$$Interface {
get "barMode"(): $BarMode
get "hideBar"(): boolean
get "negColor"(): integer
get "posColor"(): integer
get "formatStyle"(): $FormatStyle
set "posColor"(value: integer)
set "negColor"(value: integer)
set "hideBar"(value: boolean)
set "formatStyle"(value: $FormatStyle$$Type)
set "barMode"(value: $BarMode$$Type)
get "gradient1"(): integer
get "gradient2"(): integer
set "gradient1"(value: integer)
set "gradient2"(value: integer)
}

export class $ILevelRenderHelper implements $ILevelRenderHelper$$Interface {
 "gradient"(arg0: integer, arg1: integer): $ILevelRenderHelper
 "getBarMode"(): $BarMode
 "isHideBar"(): boolean
 "getNegColor"(): integer
 "getPosColor"(): integer
 "getFormatStyle"(): $FormatStyle
 "setPosColor"(arg0: integer): void
 "setNegColor"(arg0: integer): void
 "setHideBar"(arg0: boolean): void
 "setFormatStyle"(arg0: $FormatStyle$$Type): void
 "setBarMode"(arg0: $BarMode$$Type): void
 "getGradient1"(): integer
 "getGradient2"(): integer
 "setGradient1"(arg0: integer): void
 "setGradient2"(arg0: integer): void
 "settings"(arg0: boolean, arg1: $BarMode$$Type): $ILevelRenderHelper
 "setLabel"(arg0: StringJS): void
 "label"(arg0: StringJS): $ILevelRenderHelper
 "getLabel"(): StringJS
 "format"(arg0: $FormatStyle$$Type): $ILevelRenderHelper
 "color"(arg0: integer, arg1: integer): $ILevelRenderHelper
 "render"(arg0: $GuiGraphics$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: integer, arg4: $IModuleDataContents$$Type, arg5: $ModuleRenderInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelRenderHelper$$Type = ($ILevelRenderHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILevelRenderHelper$$Original = $ILevelRenderHelper;}
declare module "mcjty.rftoolsbase.api.screens.IClientScreenModule$TransformMode" {
import {$Enum} from "java.lang.Enum"

export class $IClientScreenModule$TransformMode extends $Enum<($IClientScreenModule$TransformMode)> {
static readonly "TEXTLARGE": $IClientScreenModule$TransformMode
static readonly "ITEM": $IClientScreenModule$TransformMode
static readonly "TEXT": $IClientScreenModule$TransformMode
static readonly "NONE": $IClientScreenModule$TransformMode

public static "values"(): ($IClientScreenModule$TransformMode)[]
public static "valueOf"(arg0: StringJS): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientScreenModule$TransformMode$$Type = (("none") | ("text") | ("textlarge") | ("item"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientScreenModule$TransformMode$$Original = $IClientScreenModule$TransformMode;}
declare module "mcjty.rftoolsbase.api.screens.ModuleRenderInfo" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ModuleRenderInfo {
readonly "truetype": boolean
readonly "moduleStack": $ItemStack
readonly "fontId": $ResourceLocation
readonly "pos": $BlockPos
readonly "hitx": integer
readonly "hity": integer
readonly "factor": float

constructor(arg0: float, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean, arg6: $ResourceLocation$$Type, arg7: $ItemStack$$Type)

public "getLightmapValue"(): integer
get "lightmapValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleRenderInfo$$Type = ($ModuleRenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleRenderInfo$$Original = $ModuleRenderInfo;}
declare module "mcjty.rftoolsbase.api.screens.data.IModuleDataContents" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IModuleData$$Interface} from "mcjty.rftoolsbase.api.screens.data.IModuleData"

export interface $IModuleDataContents$$Interface extends $IModuleData$$Interface {
get "maxContents"(): long
get "lastPerTick"(): long
get "contents"(): long
get "id"(): StringJS
}

export class $IModuleDataContents implements $IModuleDataContents$$Interface {
 "getMaxContents"(): long
 "getLastPerTick"(): long
 "getContents"(): long
 "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataContents$$Type = ($IModuleDataContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleDataContents$$Original = $IModuleDataContents;}
declare module "mcjty.rftoolsbase.api.screens.data.IModuleDataInteger" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IModuleData$$Interface} from "mcjty.rftoolsbase.api.screens.data.IModuleData"

export interface $IModuleDataInteger$$Interface extends $IModuleData$$Interface {
get "id"(): StringJS
}

export class $IModuleDataInteger implements $IModuleDataInteger$$Interface {
 "get"(): integer
 "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataInteger$$Type = ($IModuleDataInteger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleDataInteger$$Original = $IModuleDataInteger;}
declare module "mcjty.rftoolsbase.api.screens.IScreenDataHelper" {
import {$IModuleDataBoolean} from "mcjty.rftoolsbase.api.screens.data.IModuleDataBoolean"
import {$IModuleDataInteger} from "mcjty.rftoolsbase.api.screens.data.IModuleDataInteger"
import {$IModuleDataContents} from "mcjty.rftoolsbase.api.screens.data.IModuleDataContents"
import {$IModuleDataString} from "mcjty.rftoolsbase.api.screens.data.IModuleDataString"

export interface $IScreenDataHelper$$Interface {
}

export class $IScreenDataHelper implements $IScreenDataHelper$$Interface {
 "createContents"(arg0: long, arg1: long, arg2: long): $IModuleDataContents
 "createString"(arg0: StringJS): $IModuleDataString
 "createInteger"(arg0: integer): $IModuleDataInteger
 "createBoolean"(arg0: boolean): $IModuleDataBoolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenDataHelper$$Type = ($IScreenDataHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenDataHelper$$Original = $IScreenDataHelper;}
declare module "mcjty.rftoolsbase.api.screens.IScreenModule" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModuleData} from "mcjty.rftoolsbase.api.screens.data.IModuleData"

export interface $IScreenModule$$Interface<M extends $IScreenModule<(object), (object)>, T extends $IModuleData> {
get "rfPerTick"(): integer
}

export class $IScreenModule<M extends $IScreenModule<(object), (object)>, T extends $IModuleData> implements $IScreenModule$$Interface {
 "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
 "getRfPerTick"(): integer
 "needsController"(): boolean
 "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): T
 "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenModule$$Type<M, T> = ($IScreenModule<(M), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenModule$$Original<M, T> = $IScreenModule<(M), (T)>;}
declare module "mcjty.rftoolsbase.api.screens.data.IModuleDataBoolean" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IModuleData$$Interface} from "mcjty.rftoolsbase.api.screens.data.IModuleData"

export interface $IModuleDataBoolean$$Interface extends $IModuleData$$Interface {
get "id"(): StringJS
}

export class $IModuleDataBoolean implements $IModuleDataBoolean$$Interface {
 "get"(): boolean
 "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataBoolean$$Type = ($IModuleDataBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleDataBoolean$$Original = $IModuleDataBoolean;}
declare module "mcjty.rftoolsbase.api.screens.BarMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BarMode extends $Enum<($BarMode)> implements $StringRepresentable$$Interface {
static readonly "MODE_TEXT": $BarMode
static readonly "MODE_PERCENTAGE": $BarMode
static readonly "MODE_NONE": $BarMode
static readonly "CODEC": $Codec<($BarMode)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($BarMode)>
static readonly "MODE_PERTICK": $BarMode

public "hideText"(): boolean
public "showPerTick"(): boolean
public "showPercentage"(): boolean
public static "getMode"(arg0: StringJS): $BarMode
public "getName"(): StringJS
public static "values"(): ($BarMode)[]
public static "valueOf"(arg0: StringJS): $BarMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarMode$$Type = (("text") | ("pertick") | ("percentage") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarMode$$Original = $BarMode;}
declare module "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder$Choice" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IModuleGuiBuilder$Choice {
constructor(arg0: StringJS, ...arg1: (StringJS)[])

public "getTooltips"(): (StringJS)[]
public "getName"(): StringJS
get "tooltips"(): (StringJS)[]
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleGuiBuilder$Choice$$Type = ($IModuleGuiBuilder$Choice);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleGuiBuilder$Choice$$Original = $IModuleGuiBuilder$Choice;}
