declare module "com.the9grounds.aeadditions.api.IAEAdditionsStorageCell" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$List$$Type} from "java.util.List"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export interface $IAEAdditionsStorageCell$$Interface extends $IBasicCellItem$$Interface {
get "idleDrain"(): double
get "keyType"(): $AEKeyType
}

export class $IAEAdditionsStorageCell implements $IAEAdditionsStorageCell$$Interface {
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getBytesPerType"(arg0: $ItemStack$$Type): integer
 "getTotalTypes"(arg0: $ItemStack$$Type): integer
 "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
 "storableInStorageCell"(): boolean
 "getIdleDrain"(): double
 "isStorageCell"(arg0: $ItemStack$$Type): boolean
 "getBytes"(arg0: $ItemStack$$Type): integer
 "getKeyType"(): $AEKeyType
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEAdditionsStorageCell$$Type = ($IAEAdditionsStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAEAdditionsStorageCell$$Original = $IAEAdditionsStorageCell;}
