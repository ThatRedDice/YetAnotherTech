declare module "com.supermartijn642.trashcans.screen.TrashCanContainer" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$BaseContainerType$$Type} from "com.supermartijn642.core.gui.BaseContainerType"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$BlockEntityBaseContainer} from "com.supermartijn642.core.gui.BlockEntityBaseContainer"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrashCanBlockEntity} from "com.supermartijn642.trashcans.TrashCanBlockEntity"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $TrashCanContainer extends $BlockEntityBaseContainer<($TrashCanBlockEntity)> {
readonly "level": $Level
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "width": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "height": integer

constructor(type: $BaseContainerType$$Type<(never)>, player: $Player$$Type, pos: $BlockPos$$Type, width: integer, height: integer)

public "getBlockEntity"(): $TrashCanBlockEntity
public "getBlockEntityPos"(): $BlockPos
get "blockEntity"(): $TrashCanBlockEntity
get "blockEntityPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrashCanContainer$$Type = ($TrashCanContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrashCanContainer$$Original = $TrashCanContainer;}
