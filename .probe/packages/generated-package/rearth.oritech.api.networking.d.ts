declare module "rearth.oritech.api.networking.SyncType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"

export class $SyncType extends $Enum<($SyncType)> {
static readonly "SPARSE_TICK": $SyncType
static "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SyncType)>
static readonly "INITIAL": $SyncType
static readonly "GUI_OPEN": $SyncType
static readonly "CUSTOM": $SyncType
static readonly "GUI_TICK": $SyncType
static readonly "TICK": $SyncType

public static "values"(): ($SyncType)[]
public static "valueOf"(arg0: StringJS): $SyncType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncType$$Type = (("initial") | ("tick") | ("sparse_tick") | ("gui_tick") | ("gui_open") | ("custom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncType$$Original = $SyncType;}
declare module "rearth.oritech.api.networking.WorldPacketCodec" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec, $StreamCodec$$Type, $StreamCodec$$Interface} from "net.minecraft.network.codec.StreamCodec"
import {$StreamEncoder$$Type} from "net.minecraft.network.codec.StreamEncoder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$StreamCodec$CodecOperation$$Type} from "net.minecraft.network.codec.StreamCodec$CodecOperation"
import {$Function$$Type} from "java.util.function.Function"

export interface $WorldPacketCodec$$Interface<I, T> extends $StreamCodec$$Interface<(I), (T)> {
}

export class $WorldPacketCodec<I, T> implements $WorldPacketCodec$$Interface {
 "decode"(arg0: I, arg1: $Level$$Type): T
 "decode"(arg0: I): T
 "encode"(arg0: I, arg1: T): void
 "encode"(arg0: I, arg1: T, arg2: $Level$$Type): void
static "recursive"<B, T>(arg0: $UnaryOperator$$Type<($StreamCodec<(I), (T)>)>): $StreamCodec<(I), (T)>
 "dispatch"<U>(arg0: $Function$$Type<(U), (T)>, arg1: $Function$$Type<(T), ($StreamCodec$$Type<(I), (U)>)>): $StreamCodec<(I), (U)>
 "cast"<S>(): $StreamCodec<(S), (T)>
 "apply"<O>(arg0: $StreamCodec$CodecOperation$$Type<(I), (T), (O)>): $StreamCodec<(I), (O)>
 "map"<O>(arg0: $Function$$Type<(T), (O)>, arg1: $Function$$Type<(O), (T)>): $StreamCodec<(I), (O)>
static "of"<B, V>(arg0: $StreamEncoder$$Type<(I), (T)>, arg1: $StreamDecoder$$Type<(I), (T)>): $StreamCodec<(I), (T)>
static "unit"<B, V>(arg0: T): $StreamCodec<(I), (T)>
static "composite"<B, C, T1>(arg0: $StreamCodec$$Type<(I), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $Function$$Type<(T1), (C)>): $StreamCodec<(I), (C)>
static "composite"<B, C, T1, T2, T3, T4, T5>(arg0: $StreamCodec$$Type<(I), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(I), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(I), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(I), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $StreamCodec$$Type<(I), (T5)>, arg9: $Function$$Type<(C), (T5)>, arg10: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (C)>): $StreamCodec<(I), (C)>
static "composite"<B, C, T1, T2, T3, T4, T5, T6>(arg0: $StreamCodec$$Type<(I), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(I), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(I), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(I), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $StreamCodec$$Type<(I), (T5)>, arg9: $Function$$Type<(C), (T5)>, arg10: $StreamCodec$$Type<(I), (T6)>, arg11: $Function$$Type<(C), (T6)>, arg12: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (C)>): $StreamCodec<(I), (C)>
static "composite"<B, C, T1, T2, T3, T4>(arg0: $StreamCodec$$Type<(I), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(I), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(I), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(I), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $Function4$$Type<(T1), (T2), (T3), (T4), (C)>): $StreamCodec<(I), (C)>
static "composite"<B, C, T1, T2>(arg0: $StreamCodec$$Type<(I), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(I), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $BiFunction$$Type<(T1), (T2), (C)>): $StreamCodec<(I), (C)>
static "composite"<B, C, T1, T2, T3>(arg0: $StreamCodec$$Type<(I), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(I), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(I), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $Function3$$Type<(T1), (T2), (T3), (C)>): $StreamCodec<(I), (C)>
static "ofMember"<B, V>(arg0: $StreamMemberEncoder$$Type<(I), (T)>, arg1: $StreamDecoder$$Type<(I), (T)>): $StreamCodec<(I), (T)>
 "mapStream"<O extends $ByteBuf>(arg0: $Function$$Type<(O), (I)>): $StreamCodec<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldPacketCodec$$Type<I, T> = ($WorldPacketCodec<(I), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldPacketCodec$$Original<I, T> = $WorldPacketCodec<(I), (T)>;}
declare module "rearth.oritech.api.networking.NetworkedBlockEntity" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker$$Interface} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SyncType$$Type} from "rearth.oritech.api.networking.SyncType"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NetworkedBlockEntity extends $BlockEntity implements $BlockEntityTicker$$Interface<($NetworkedBlockEntity)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "sendUpdate"(arg0: $SyncType$$Type, arg1: $ServerPlayer$$Type): void
public "sendUpdate"(arg0: $SyncType$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $NetworkedBlockEntity$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getSparseUpdateInterval"(): integer
public "getTickUpdateInterval"(): integer
public "preNetworkUpdate"(arg0: $SyncType$$Type): void
public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $NetworkedBlockEntity$$Type): void
public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $NetworkedBlockEntity$$Type): void
public "setChanged"(): void
public "setChanged"(arg0: boolean): void
get "sparseUpdateInterval"(): integer
get "tickUpdateInterval"(): integer
get "changed"(): void
set "changed"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedBlockEntity$$Type = ($NetworkedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedBlockEntity$$Original = $NetworkedBlockEntity;}
declare module "rearth.oritech.api.networking.UpdatableField" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SyncType$$Type} from "rearth.oritech.api.networking.SyncType"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $UpdatableField$$Interface<T, R> {
get "deltaData"(): R
get "deltaCodec"(): $StreamCodec<($ByteBuf), (R)>
get "fullCodec"(): $StreamCodec<($ByteBuf), (T)>
get "fullData"(): T
}

export class $UpdatableField<T, R> implements $UpdatableField$$Interface {
 "useDeltaOnly"(arg0: $SyncType$$Type): boolean
 "getDeltaData"(): R
 "getDeltaCodec"(): $StreamCodec<($ByteBuf), (R)>
 "getFullCodec"(): $StreamCodec<($ByteBuf), (T)>
 "handleDeltaUpdate"(arg0: R): void
 "handleFullUpdate"(arg0: T): void
 "getFullData"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdatableField$$Type<T, R> = ($UpdatableField<(T), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpdatableField$$Original<T, R> = $UpdatableField<(T), (R)>;}
