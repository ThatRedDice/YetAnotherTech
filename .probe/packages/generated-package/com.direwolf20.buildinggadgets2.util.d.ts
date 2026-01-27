declare module "com.direwolf20.buildinggadgets2.util.context.ItemActionContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ItemActionContext extends $Record {
constructor(pos: $BlockPos$$Type, hitResult: $BlockHitResult$$Type, player: $Player$$Type, level: $Level$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type)

public "level"(): $Level
public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
public "player"(): $Player
public "hitResult"(): $BlockHitResult
public "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemActionContext$$Type = ({"level"?: $Level$$Type, "stack"?: $ItemStack$$Type, "hitResult"?: $BlockHitResult$$Type, "player"?: $Player$$Type, "hand"?: $InteractionHand$$Type, "pos"?: $BlockPos$$Type}) | ([level?: $Level$$Type, stack?: $ItemStack$$Type, hitResult?: $BlockHitResult$$Type, player?: $Player$$Type, hand?: $InteractionHand$$Type, pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemActionContext$$Original = $ItemActionContext;}
