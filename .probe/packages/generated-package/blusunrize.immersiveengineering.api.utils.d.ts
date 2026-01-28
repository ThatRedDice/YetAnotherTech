declare module "blusunrize.immersiveengineering.api.utils.ComputerControlState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ComputerControlState {
constructor()

public "setOneRef"(): void
public "isAttached"(): boolean
public "addReference"(): void
public "removeReference"(): void
public "clear"(): void
public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
get "oneRef"(): void
get "attached"(): boolean
get "enabled"(): boolean
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerControlState$$Type = ($ComputerControlState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerControlState$$Original = $ComputerControlState;}
declare module "blusunrize.immersiveengineering.api.utils.FastEither" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FastEither<L, R> {
public static "streamCodec"<B extends $ByteBuf, L, R>(arg0: $StreamCodec$$Type<(B), (L)>, arg1: $StreamCodec$$Type<(B), (R)>): $StreamCodec<(B), ($FastEither<(L), (R)>)>
public "leftNonnull"(): L
public "rightNonnull"(): R
public "rightOptional"(): $Optional<(R)>
public "leftOptional"(): $Optional<(L)>
public static "fromDFU"<L, R>(arg0: $Either$$Type<(L), (R)>): $FastEither<(L), (R)>
public "toDFU"(): $Either<(L), (R)>
public "isRight"(): boolean
public "consume"(arg0: $Consumer$$Type<(L)>, arg1: $Consumer$$Type<(R)>): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
public static "left"<L, R>(arg0: L): $FastEither<(L), (R)>
public static "right"<L, R>(arg0: R): $FastEither<(L), (R)>
public "isLeft"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastEither$$Type<L, R> = ($FastEither<(L), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FastEither$$Original<L, R> = $FastEither<(L), (R)>;}
declare module "blusunrize.immersiveengineering.api.utils.Color4" {
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Vector3f} from "org.joml.Vector3f"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $Color4 extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($Color4)>
static readonly "WHITE": $Color4

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(r: float, g: float, b: float, a: float)

public "toVector3f"(): $Vector3f
public static "fromARGB"(arg0: integer): $Color4
public static "fromRGB"(arg0: integer): $Color4
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "load"(arg0: $Tag$$Type): $Color4
public "b"(): float
public static "from"(arg0: $DyeColor$$Type): $Color4
public "a"(): float
public "g"(): float
public "save"(): $Tag
public "r"(): float
public "toInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color4$$Type = ({"g"?: float, "a"?: float, "r"?: float, "b"?: float}) | ([g?: float, a?: float, r?: float, b?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color4$$Original = $Color4;}
declare module "blusunrize.immersiveengineering.api.utils.PlayerUtils$ConnectionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerUtils$ConnectionAccess$$Interface {
set "clientIsFloating"(value: boolean)
set "aboveGroundTickCount"(value: integer)
}

export class $PlayerUtils$ConnectionAccess implements $PlayerUtils$ConnectionAccess$$Interface {
 "setClientIsFloating"(arg0: boolean): void
 "setAboveGroundTickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerUtils$ConnectionAccess$$Type = ($PlayerUtils$ConnectionAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerUtils$ConnectionAccess$$Original = $PlayerUtils$ConnectionAccess;}
declare module "blusunrize.immersiveengineering.api.utils.SetRestrictedField" {
import {$Supplier$$Interface} from "java.util.function.Supplier"

export class $SetRestrictedField<T> implements $Supplier$$Interface<(T)> {
public static "startInitializing"(arg0: boolean): void
public static "common"<T>(): $SetRestrictedField<(T)>
public static "lock"(arg0: boolean): void
public "get"(): T
public "setValue"(arg0: T): void
public static "client"<T>(): $SetRestrictedField<(T)>
public "isInitialized"(): boolean
set "value"(value: T)
get "initialized"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetRestrictedField$$Type<T> = ($SetRestrictedField<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SetRestrictedField$$Original<T> = $SetRestrictedField<(T)>;}
