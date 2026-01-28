declare module "appeng.items.tools.powered.WirelessTerminalItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IGridLinkableHandler} from "appeng.api.features.IGridLinkableHandler"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeableItem$$Interface} from "appeng.api.upgrades.IUpgradeableItem"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$PoweredContainerItem} from "appeng.items.tools.powered.PoweredContainerItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$IGrid} from "appeng.api.networking.IGrid"

export class $WirelessTerminalItem extends $PoweredContainerItem implements $IMenuItem$$Interface, $IUpgradeableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "getMenuType"(): $MenuType<(never)>
public "getConfigManager"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManager
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
public "usePower"(arg0: $Player$$Type, arg1: double, arg2: $ItemStack$$Type): boolean
public "hasPower"(arg0: $Player$$Type, arg1: double, arg2: $ItemStack$$Type): boolean
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "menuType"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalItem$$Type = ($WirelessTerminalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessTerminalItem$$Original = $WirelessTerminalItem;}
declare module "appeng.items.tools.powered.MatterCannonItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LookDirection$$Type} from "appeng.util.LookDirection"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $MatterCannonItem extends $AEBasePoweredItem implements $IBasicCellItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "storableInStorageCell"(): boolean
public "getIdleDrain"(): double
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "fireCannon"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $LookDirection$$Type): boolean
public static "getDamageFromPenetration"(arg0: float): integer
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getKeyType"(): $AEKeyType
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isEditable"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "idleDrain"(): double
get "keyType"(): $AEKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonItem$$Type = ($MatterCannonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterCannonItem$$Original = $MatterCannonItem;}
declare module "appeng.items.tools.powered.AbstractPortableCell" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$PoweredContainerItem} from "appeng.items.tools.powered.PoweredContainerItem"
import {$PortableCellMenuHost} from "appeng.items.contents.PortableCellMenuHost"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"

export class $AbstractPortableCell extends $PoweredContainerItem implements $ICellWorkbenchItem$$Interface, $IMenuItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $MenuType$$Type<(never)>, arg1: $Item$Properties$$Type, arg2: integer)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $PortableCellMenuHost<(never)>
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getRecipeId"(): $ResourceLocation
public "onUpgradesChanged"(arg0: $ItemStack$$Type, arg1: $IUpgradeInventory$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getColor"(arg0: $ItemStack$$Type): integer
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPortableCell$$Type = ($AbstractPortableCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPortableCell$$Original = $AbstractPortableCell;}
declare module "appeng.items.tools.powered.PoweredContainerItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $PoweredContainerItem extends $AEBasePoweredItem implements $IMenuItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(never)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredContainerItem$$Type = ($PoweredContainerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredContainerItem$$Original = $PoweredContainerItem;}
declare module "appeng.items.tools.powered.PortableCellItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AbstractPortableCell} from "appeng.items.tools.powered.AbstractPortableCell"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $PortableCellItem extends $AbstractPortableCell implements $IBasicCellItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AEKeyType$$Type, arg1: integer, arg2: $MenuType$$Type<(never)>, arg3: $StorageTier$$Type, arg4: $Item$Properties$$Type, arg5: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTier"(): $StorageTier
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getIdleDrain"(): double
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getRecipeId"(): $ResourceLocation
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getBytes"(arg0: $ItemStack$$Type): integer
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getKeyType"(): $AEKeyType
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "storableInStorageCell"(): boolean
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tier"(): $StorageTier
get "idleDrain"(): double
get "recipeId"(): $ResourceLocation
get "keyType"(): $AEKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableCellItem$$Type = ($PortableCellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableCellItem$$Original = $PortableCellItem;}
declare module "appeng.items.tools.powered.EntropyManipulatorItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IBlockTool$$Interface} from "appeng.hooks.IBlockTool"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $EntropyManipulatorItem extends $AEBasePoweredItem implements $IBlockTool$$Interface {
static readonly "ENERGY_PER_USE": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyManipulatorItem$$Type = ($EntropyManipulatorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyManipulatorItem$$Original = $EntropyManipulatorItem;}
declare module "appeng.items.tools.powered.powersink.AEBasePoweredItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$IAEItemPowerStorage$$Interface} from "appeng.api.implementations.items.IAEItemPowerStorage"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"

export class $AEBasePoweredItem extends $AEBaseItem implements $IAEItemPowerStorage$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getAECurrentPower"(arg0: $ItemStack$$Type): double
public "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getAEMaxPower"(arg0: $ItemStack$$Type): double
public "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getChargeRate"(arg0: $ItemStack$$Type): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredItem$$Type = ($AEBasePoweredItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBasePoweredItem$$Original = $AEBasePoweredItem;}
declare module "appeng.items.tools.powered.WirelessCraftingTerminalItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$WirelessTerminalItem} from "appeng.items.tools.powered.WirelessTerminalItem"
import {$IGridLinkableHandler} from "appeng.api.features.IGridLinkableHandler"

export class $WirelessCraftingTerminalItem extends $WirelessTerminalItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "getMenuType"(): $MenuType<(never)>
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "menuType"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingTerminalItem$$Type = ($WirelessCraftingTerminalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessCraftingTerminalItem$$Original = $WirelessCraftingTerminalItem;}
declare module "appeng.items.tools.powered.ChargedStaffItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ChargedStaffItem extends $AEBasePoweredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getChargeRate"(arg0: $ItemStack$$Type): double
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedStaffItem$$Type = ($ChargedStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedStaffItem$$Original = $ChargedStaffItem;}
declare module "appeng.items.tools.powered.ColorApplicatorItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$IBlockTool$$Interface} from "appeng.hooks.IBlockTool"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IMouseWheelItem$$Interface} from "appeng.helpers.IMouseWheelItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $ColorApplicatorItem extends $AEBasePoweredItem implements $IBasicCellItem$$Interface, $IBlockTool$$Interface, $IMouseWheelItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "consumeItem"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type, arg2: boolean): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getActiveColor"(arg0: $ItemStack$$Type): $AEColor
public "consumeColor"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type, arg2: boolean): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "cycleColors"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type, arg2: integer): void
public static "createFullColorApplicator"(): $ItemStack
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "storableInStorageCell"(): boolean
public "getIdleDrain"(): double
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void
public "setActiveColor"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getName"(arg0: $ItemStack$$Type): $Component
public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getColor"(arg0: $ItemStack$$Type): $AEColor
public "getKeyType"(): $AEKeyType
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isEditable"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "idleDrain"(): double
get "keyType"(): $AEKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorApplicatorItem$$Type = ($ColorApplicatorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorApplicatorItem$$Original = $ColorApplicatorItem;}
