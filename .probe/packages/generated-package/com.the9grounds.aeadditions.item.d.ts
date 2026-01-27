declare module "com.the9grounds.aeadditions.item.storage.DiskCellWithoutMod" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEToolItem$$Interface} from "appeng.hooks.AEToolItem"

export class $DiskCellWithoutMod extends $Item implements $AEToolItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskCellWithoutMod$$Type = ($DiskCellWithoutMod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiskCellWithoutMod$$Original = $DiskCellWithoutMod;}
declare module "com.the9grounds.aeadditions.item.storage.StorageCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$IAEAdditionsStorageCell$$Interface} from "com.the9grounds.aeadditions.api.IAEAdditionsStorageCell"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $StorageCell extends $Item implements $IBasicCellItem$$Interface, $IAEAdditionsStorageCell$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: $AEKeyType$$Type)

public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getIdleDrain"(): double
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "getHousingItem"(): $ItemLike
public "get_idleDrain"(): double
public "get_bytesPerType"(): integer
public "getKiloBytes"(): integer
public "getNumberOfTypes"(): integer
public "get_keyType"(): $AEKeyType
public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getComponent"(): $ItemLike
public "getKeyType"(): $AEKeyType
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "storableInStorageCell"(): boolean
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "idleDrain"(): double
get "housingItem"(): $ItemLike
get "_idleDrain"(): double
get "_bytesPerType"(): integer
get "kiloBytes"(): integer
get "numberOfTypes"(): integer
get "_keyType"(): $AEKeyType
get "component"(): $ItemLike
get "keyType"(): $AEKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCell$$Type = ($StorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageCell$$Original = $StorageCell;}
declare module "com.the9grounds.aeadditions.item.storage.SuperStorageCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SuperStorageCell extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "storableInStorageCell"(): boolean
public "getIdleDrain"(): double
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "getHousingItem"(): $ItemLike
public "get_idleDrain"(): double
public "get_bytesPerType"(): integer
public "getKiloBytes"(): integer
public "getNumberOfTypes"(): integer
public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getComponent"(): $ItemLike
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "idleDrain"(): double
get "housingItem"(): $ItemLike
get "_idleDrain"(): double
get "_bytesPerType"(): integer
get "kiloBytes"(): integer
get "numberOfTypes"(): integer
get "component"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperStorageCell$$Type = ($SuperStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperStorageCell$$Original = $SuperStorageCell;}
