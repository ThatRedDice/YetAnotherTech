declare module "com.tom.storagemod.util.BlockFace" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BlockFace extends $Record {
constructor(pos: $BlockPos$$Type, from: $Direction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "from"(): $Direction
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFace$$Type = ({"pos"?: $BlockPos$$Type, "from"?: $Direction$$Type}) | ([pos?: $BlockPos$$Type, from?: $Direction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFace$$Original = $BlockFace;}
declare module "com.tom.storagemod.util.BlockFaceReference" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Record} from "java.lang.Record"

export class $BlockFaceReference extends $Record {
constructor(level: $Level$$Type, pos: $BlockPos$$Type, from: $Direction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "from"(): $Direction
public "getState"(): $BlockState
public "pos"(): $BlockPos
public "level"(): $Level
public "getBlockEntity"(): $BlockEntity
public static "touching"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $BlockFaceReference
get "state"(): $BlockState
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFaceReference$$Type = ({"level"?: $Level$$Type, "pos"?: $BlockPos$$Type, "from"?: $Direction$$Type}) | ([level?: $Level$$Type, pos?: $BlockPos$$Type, from?: $Direction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFaceReference$$Original = $BlockFaceReference;}
