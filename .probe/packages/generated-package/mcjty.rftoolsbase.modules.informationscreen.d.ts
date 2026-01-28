declare module "mcjty.rftoolsbase.modules.informationscreen.blocks.InformationScreenBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$RotationType} from "mcjty.lib.blocks.RotationType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $InformationScreenBlock extends $BaseBlock {
static readonly "BLOCK_NORTH": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "BLOCK_SOUTH": $VoxelShape
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "BLOCK_EAST": $VoxelShape
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "BLOCK_WEST": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "getRotationType"(): $RotationType
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InformationScreenBlock$$Type = ($InformationScreenBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InformationScreenBlock$$Original = $InformationScreenBlock;}
