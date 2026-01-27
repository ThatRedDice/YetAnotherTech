declare module "com.simibubi.create.impl.contraption.storage.FallbackMountedStorageType" {
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$SimpleMountedStorageType} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorageType"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$FallbackMountedStorage} from "com.simibubi.create.impl.contraption.storage.FallbackMountedStorage"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FallbackMountedStorageType extends $SimpleMountedStorageType<($FallbackMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(never)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(never)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $MountedItemStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallbackMountedStorageType$$Type = ($FallbackMountedStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallbackMountedStorageType$$Original = $FallbackMountedStorageType;}
declare module "com.simibubi.create.impl.contraption.storage.FallbackMountedStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SimpleMountedStorage} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorage"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"

export class $FallbackMountedStorage extends $SimpleMountedStorage {
static readonly "CODEC": $MapCodec<($FallbackMountedStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

constructor(arg0: $IItemHandler$$Type)

public static "isValid"(arg0: $IItemHandler$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallbackMountedStorage$$Type = ($FallbackMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallbackMountedStorage$$Original = $FallbackMountedStorage;}
