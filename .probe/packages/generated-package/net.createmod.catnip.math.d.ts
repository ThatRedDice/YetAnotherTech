declare module "net.createmod.catnip.math.BlockFace" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $BlockFace extends $Pair<($BlockPos), ($Direction)> {
static "CODEC": $Codec<($BlockFace)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BlockFace)>

constructor(arg0: $BlockPos$$Type, arg1: $Direction$$Type)

public "getOppositeFace"(): $Direction
public "getFace"(): $Direction
public static "fromNBT"(arg0: $CompoundTag$$Type): $BlockFace
public "getConnectedPos"(): $BlockPos
public "isEquivalent"(arg0: $BlockFace$$Type): boolean
public "serializeNBT"(): $CompoundTag
public "getOpposite"(): $BlockFace
public "getPos"(): $BlockPos
get "oppositeFace"(): $Direction
get "face"(): $Direction
get "connectedPos"(): $BlockPos
get "opposite"(): $BlockFace
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFace$$Type = ($BlockFace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFace$$Original = $BlockFace;}
declare module "net.createmod.catnip.math.VoxelShaper" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $VoxelShaper {
constructor()

public static "forDirectional"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShaper
public static "forHorizontal"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShaper
public static "forHorizontalAxis"(arg0: $VoxelShape$$Type, arg1: $Direction$Axis$$Type): $VoxelShaper
public "withShape"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShaper
public static "forAxis"(arg0: $VoxelShape$$Type, arg1: $Direction$Axis$$Type): $VoxelShaper
public "withVerticalShapes"(arg0: $VoxelShape$$Type): $VoxelShaper
public static "axisAsFace"(arg0: $Direction$Axis$$Type): $Direction
public "get"(arg0: $Direction$$Type): $VoxelShape
public "get"(arg0: $Direction$Axis$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShaper$$Type = ($VoxelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoxelShaper$$Original = $VoxelShaper;}
declare module "net.createmod.catnip.math.Pointing" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $Pointing extends $Enum<($Pointing)> implements $StringRepresentable$$Interface {
static readonly "DOWN": $Pointing
static readonly "LEFT": $Pointing
static readonly "RIGHT": $Pointing
static readonly "UP": $Pointing

public "getCombinedDirection"(arg0: $Direction$$Type): $Direction
public "getXRotation"(): integer
public static "values"(): ($Pointing)[]
public static "valueOf"(arg0: StringJS): $Pointing
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "XRotation"(): integer
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointing$$Type = (("up") | ("left") | ("down") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pointing$$Original = $Pointing;}
