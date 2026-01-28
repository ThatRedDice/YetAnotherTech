declare module "net.minecraft.WorldVersion" {
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$Date} from "java.util.Date"
import {$DataVersion} from "net.minecraft.world.level.storage.DataVersion"

export interface $WorldVersion$$Interface {
get "name"(): StringJS
get "id"(): StringJS
get "stable"(): boolean
get "protocolVersion"(): integer
get "dataVersion"(): $DataVersion
get "buildTime"(): $Date
}

export class $WorldVersion implements $WorldVersion$$Interface {
 "getName"(): StringJS
 "getId"(): StringJS
 "isStable"(): boolean
 "getProtocolVersion"(): integer
 "getDataVersion"(): $DataVersion
 "getPackVersion"(arg0: $PackType$$Type): integer
 "getBuildTime"(): $Date
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldVersion$$Type = ($WorldVersion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldVersion$$Original = $WorldVersion;}
declare module "net.minecraft.ReportType" {
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $ReportType extends $Record {
static readonly "CRASH": $ReportType
static readonly "PROFILE": $ReportType
static readonly "TEST": $ReportType
static readonly "CHUNK_IO_ERROR": $ReportType
static readonly "NETWORK_PROTOCOL_ERROR": $ReportType

constructor(header: StringJS, nuggets: $List$$Type<(StringJS)>)

public "header"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "appendHeader"(arg0: $StringBuilder$$Type, arg1: $List$$Type<(StringJS)>): void
public "nuggets"(): $List<(StringJS)>
public "getErrorComment"(): StringJS
get "errorComment"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportType$$Type = ({"header"?: StringJS, "nuggets"?: $List$$Type<(StringJS)>}) | ([header?: StringJS, nuggets?: $List$$Type<(StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportType$$Original = $ReportType;}
declare module "net.minecraft.ReportedException" {
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Throwable} from "java.lang.Throwable"
import {$RuntimeException} from "java.lang.RuntimeException"

export class $ReportedException extends $RuntimeException {
constructor(arg0: $CrashReport$$Type)

public "getCause"(): $Throwable
public "getMessage"(): StringJS
public "getReport"(): $CrashReport
get "cause"(): $Throwable
get "message"(): StringJS
get "report"(): $CrashReport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportedException$$Type = ($ReportedException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportedException$$Original = $ReportedException;}
declare module "net.minecraft.SystemReport" {
import {$Map} from "java.util.Map"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$SystemReportAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.SystemReportAccessor"

export class $SystemReport implements $SystemReportAccessor$$Interface {
static readonly "BYTES_PER_MEBIBYTE": long

constructor()

public "getEntries"(): $Map
public "setDetail"(arg0: StringJS, arg1: StringJS): void
public "setDetail"(arg0: StringJS, arg1: $Supplier$$Type<(StringJS)>): void
public "toLineSeparatedString"(): StringJS
public static "getOPERATING_SYSTEM$create_$md$b00d76$2"(): StringJS
public static "getJAVA_VERSION$create_$md$b00d76$3"(): StringJS
public static "sizeInMiB"(arg0: long): float
public "appendToCrashReportString"(arg0: $StringBuilder$$Type): void
public static "getOPERATING_SYSTEM"(): StringJS
public static "getJAVA_VERSION"(): StringJS
get "entries"(): $Map
public static get "OPERATING_SYSTEM$create_$md$b00d76$2"(): StringJS
public static get "JAVA_VERSION$create_$md$b00d76$3"(): StringJS
public static get "OPERATING_SYSTEM"(): StringJS
public static get "JAVA_VERSION"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SystemReport$$Type = ($SystemReport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SystemReport$$Original = $SystemReport;}
declare module "net.minecraft.CrashReport" {
import {$ReportType$$Type} from "net.minecraft.ReportType"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$List$$Type} from "java.util.List"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$SystemReport} from "net.minecraft.SystemReport"
import {$CrashReportCategory} from "net.minecraft.CrashReportCategory"

export class $CrashReport {
constructor(arg0: StringJS, arg1: $Throwable$$Type)

public "saveToFile"(arg0: $Path$$Type, arg1: $ReportType$$Type, arg2: $List$$Type<(StringJS)>): boolean
public "saveToFile"(arg0: $Path$$Type, arg1: $ReportType$$Type): boolean
public "getException"(): $Throwable
public "getTitle"(): StringJS
public static "forThrowable"(arg0: $Throwable$$Type, arg1: StringJS): $CrashReport
public "addCategory"(arg0: StringJS): $CrashReportCategory
public "addCategory"(arg0: StringJS, arg1: integer): $CrashReportCategory
public static "preload"(): void
public "getFriendlyReport"(arg0: $ReportType$$Type, arg1: $List$$Type<(StringJS)>): StringJS
public "getFriendlyReport"(arg0: $ReportType$$Type): StringJS
public "getSaveFile"(): $Path
public "getSystemReport"(): $SystemReport
public "getExceptionMessage"(): StringJS
public "getDetails"(arg0: $StringBuilder$$Type): void
public "getDetails"(): StringJS
get "exception"(): $Throwable
get "title"(): StringJS
get "saveFile"(): $Path
get "systemReport"(): $SystemReport
get "exceptionMessage"(): StringJS
get "details"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrashReport$$Type = ($CrashReport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrashReport$$Original = $CrashReport;}
declare module "net.minecraft.CrashReportDetail" {
import {$Callable$$Interface} from "java.util.concurrent.Callable"

export interface $CrashReportDetail$$Interface<V> extends $Callable$$Interface<(V)> {

(): V
}

export class $CrashReportDetail<V> implements $CrashReportDetail$$Interface {
 "call"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrashReportDetail$$Type<V> = (() => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrashReportDetail$$Original<V> = $CrashReportDetail<(V)>;}
declare module "net.minecraft.ChatFormatting" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Collection} from "java.util.Collection"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$KubeColor$$Interface} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"

export class $ChatFormatting extends $Enum<($ChatFormatting)> implements $StringRepresentable$$Interface, $KubeColor$$Interface {
static readonly "ITALIC": $ChatFormatting
static readonly "GOLD": $ChatFormatting
static readonly "GRAY": $ChatFormatting
static readonly "AQUA": $ChatFormatting
static readonly "WHITE": $ChatFormatting
static readonly "CODEC": $Codec<($ChatFormatting)>
static readonly "BLUE": $ChatFormatting
static readonly "OBFUSCATED": $ChatFormatting
static readonly "DARK_AQUA": $ChatFormatting
static readonly "RESET": $ChatFormatting
static readonly "DARK_BLUE": $ChatFormatting
static readonly "GREEN": $ChatFormatting
static readonly "UNDERLINE": $ChatFormatting
static readonly "RED": $ChatFormatting
static readonly "PREFIX_CODE": character
static readonly "DARK_PURPLE": $ChatFormatting
static readonly "STRIKETHROUGH": $ChatFormatting
static readonly "DARK_RED": $ChatFormatting
static readonly "LIGHT_PURPLE": $ChatFormatting
static readonly "BLACK": $ChatFormatting
static readonly "BOLD": $ChatFormatting
static readonly "DARK_GREEN": $ChatFormatting
static readonly "YELLOW": $ChatFormatting
static readonly "DARK_GRAY": $ChatFormatting

public "getRgb"(): integer
public "getArgb"(): integer
public "isFormat"(): boolean
public "isColor"(): boolean
public static "stripFormatting"(arg0: StringJS): StringJS
public static "getById"(arg0: integer): $ChatFormatting
public static "getByCode"(arg0: character): $ChatFormatting
public static "getNames"(arg0: boolean, arg1: boolean): $Collection<(StringJS)>
public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($ChatFormatting)[]
public "getChar"(): character
public static "valueOf"(arg0: StringJS): $ChatFormatting
public "getId"(): integer
public static "getByName"(arg0: StringJS): $ChatFormatting
public "getSerializedName"(): StringJS
public "getColor"(): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getFireworkRGB"(): integer
public "toHexString"(): StringJS
public "serialize"(): StringJS
public "specialEquals"(o: any, shallow: boolean): boolean
public "createTextColor"(): $TextColor
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rgb"(): integer
get "argb"(): integer
get "format"(): boolean
get "color"(): boolean
get "name"(): StringJS
get "char"(): character
get "id"(): integer
get "serializedName"(): StringJS
get "color"(): integer
get "remappedEnumConstantName"(): StringJS
get "fireworkRGB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatFormatting$$Type = (("black") | ("dark_blue") | ("dark_green") | ("dark_aqua") | ("dark_red") | ("dark_purple") | ("gold") | ("gray") | ("dark_gray") | ("blue") | ("green") | ("aqua") | ("red") | ("light_purple") | ("yellow") | ("white") | ("obfuscated") | ("bold") | ("strikethrough") | ("underline") | ("italic") | ("reset"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatFormatting$$Original = $ChatFormatting;}
declare module "net.minecraft.BlockUtil$FoundRectangle" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockUtil$FoundRectangle {
readonly "axis1Size": integer
readonly "minCorner": $BlockPos
readonly "axis2Size": integer

constructor(arg0: $BlockPos$$Type, arg1: integer, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUtil$FoundRectangle$$Type = ($BlockUtil$FoundRectangle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockUtil$FoundRectangle$$Original = $BlockUtil$FoundRectangle;}
declare module "net.minecraft.CrashReportCategory" {
import {$LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$CrashReportDetail$$Type} from "net.minecraft.CrashReportDetail"
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrashReportCategory {
constructor(arg0: StringJS)

public "trimStacktrace"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "applyStackTrace"(arg0: $Throwable$$Type): void
public "fillInStackTrace"(arg0: integer): integer
public "setStackTrace"(arg0: ($StackTraceElement$$Type)[]): void
public "setDetail"(arg0: StringJS, arg1: $CrashReportDetail$$Type<(StringJS)>): $CrashReportCategory
public "setDetail"(arg0: StringJS, arg1: any): $CrashReportCategory
public static "populateBlockDetails"(arg0: $CrashReportCategory$$Type, arg1: $LevelHeightAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "formatLocation"(arg0: $LevelHeightAccessor$$Type, arg1: double, arg2: double, arg3: double): StringJS
public static "formatLocation"(arg0: $LevelHeightAccessor$$Type, arg1: $BlockPos$$Type): StringJS
public static "formatLocation"(arg0: $LevelHeightAccessor$$Type, arg1: integer, arg2: integer, arg3: integer): StringJS
public "getDetails"(arg0: $StringBuilder$$Type): void
public "getStacktrace"(): ($StackTraceElement)[]
public "validateStackTrace"(arg0: $StackTraceElement$$Type, arg1: $StackTraceElement$$Type): boolean
public "setDetailError"(arg0: StringJS, arg1: $Throwable$$Type): void
set "stackTrace"(value: ($StackTraceElement$$Type)[])
get "stacktrace"(): ($StackTraceElement)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrashReportCategory$$Type = ($CrashReportCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrashReportCategory$$Original = $CrashReportCategory;}
