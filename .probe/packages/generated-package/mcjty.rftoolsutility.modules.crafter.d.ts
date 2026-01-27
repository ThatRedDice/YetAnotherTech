declare module "mcjty.rftoolsutility.modules.crafter.blocks.CrafterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Collection} from "java.util.Collection"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IComponentsToPreserve$$Interface} from "mcjty.lib.crafting.IComponentsToPreserve"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $CrafterBlock extends $BaseBlock implements $IComponentsToPreserve$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockEntityType$BlockEntitySupplier$$Type<($BlockEntity$$Type)>)

public "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterBlock$$Type = ($CrafterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrafterBlock$$Original = $CrafterBlock;}
