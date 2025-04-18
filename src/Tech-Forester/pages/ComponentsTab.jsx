// pages/ComponentsTab.jsx
import React from 'react';
import { PrimaryButton } from '../Components/Button/PrimaryButton';
import { SecondaryButton } from '../Components/Button/SecondaryButton';
import { OutlineButton } from '../Components/Button/OutlineButton';
import { IconButton } from '../Components/Button/IconButton';
import { GradientButton } from '../Components/Button/GradientButton';
import { LoadingButton } from '../Components/Button/LoadingButton';
import { LinkButton } from '../Components/Button/LinkButton';
import { DangerButton } from '../Components/Button/DangerButton';
import { SuccessButton } from '../Components/Button/SuccessButton';
import { ButtonGroup } from '../Components/Button/ButtonGroup';
import { ToggleSwitch } from '../Components/Button/ToggleSwitch';
import  AnimatedBorderButton  from '../Components/Button/AnimatedButton';






import { Trash2, Edit, Plus } from 'lucide-react';
const ComponentsTab = () => {
  return (
    <div className="p-6 space-y-6 ">
      {/* Page Heading */}
      <h2 className="text-2xl font-bold">Button Components</h2>

      {/* Primary Buttons */}
      <div className="space-y-2 ">
        <h3 className="text-xl font-semibold">Primary Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <PrimaryButton size="sm">Small</PrimaryButton>
          <PrimaryButton size="md">Medium</PrimaryButton>
          <PrimaryButton size="lg">Large</PrimaryButton>
          <PrimaryButton disabled>Disabled</PrimaryButton>
          <PrimaryButton fullWidth>Full Width</PrimaryButton>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Secondary Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <SecondaryButton>Secondary</SecondaryButton>
          <SecondaryButton size="lg">Large Secondary</SecondaryButton>
          <SecondaryButton disabled>Disabled Secondary</SecondaryButton>
        </div>
      </div>

      {/* Outline Buttons */}
<div className="space-y-2">
  <h3 className="text-xl font-semibold">Outline Buttons</h3>
  <div className="flex gap-4 flex-wrap">
    <OutlineButton>Default</OutlineButton>
    <OutlineButton color="red">Red</OutlineButton>
    <OutlineButton color="green">Green</OutlineButton>
    <OutlineButton color="purple">Purple</OutlineButton>
    <OutlineButton size="lg">Large Outline</OutlineButton>
    <OutlineButton disabled>Disabled</OutlineButton>
    <OutlineButton fullWidth>Full Width</OutlineButton>
  </div>
</div>

    {/* Icon Buttons */}
<div className="space-y-2">
  <h3 className="text-xl font-semibold">Icon Buttons</h3>
  <div className="flex gap-4 flex-wrap items-center">
    <IconButton icon={<Plus size={20} />} color="blue" title="Add" />
    <IconButton icon={<Edit size={20} />} color="green" title="Edit" />
    <IconButton icon={<Trash2 size={20} />} color="red" title="Delete" />
    <IconButton icon={<Edit size={20} />} color="gray" rounded title="Rounded Gray" />
    <IconButton icon={<Plus size={20} />} color="transparent" size="lg" title="Transparent Large" />
    <IconButton icon={<Trash2 size={20} />} disabled title="Disabled" />
  </div>
</div>

    {/* Gradient Buttons */}
<div className="space-y-2">
  <h3 className="text-xl font-semibold">Gradient Buttons</h3>
  <div className="flex gap-4 flex-wrap">
    <GradientButton>Default Gradient</GradientButton>
    <GradientButton gradient="green-to-blue">Green to Blue</GradientButton>
    <GradientButton gradient="orange-to-red">Orange to Red</GradientButton>
    <GradientButton gradient="pink-to-purple">Pink to Purple</GradientButton>
    <GradientButton size="lg">Large Gradient</GradientButton>
    <GradientButton disabled>Disabled Gradient</GradientButton>
    <GradientButton fullWidth>Full Width</GradientButton>
  </div>
</div>

    {/* Loading Buttons */}
<div className="space-y-2">
  <h3 className="text-xl font-semibold">Loading Buttons</h3>
  <div className="flex gap-4 flex-wrap">
    <LoadingButton loading>Loading...</LoadingButton>
    <LoadingButton loading color="green">Saving</LoadingButton>
    <LoadingButton loading color="red" size="lg">Deleting</LoadingButton>
    <LoadingButton loading fullWidth>Submitting</LoadingButton>
    <LoadingButton>Normal Button</LoadingButton>
  </div>
</div>

{/* Link Buttons */}
<div className="space-y-2 mt-4">
  <h3 className="text-xl font-semibold">Link Buttons</h3>
  <div className="flex gap-4 flex-wrap items-center">
    <LinkButton>Default Link</LinkButton>
    <LinkButton color="red">Delete</LinkButton>
    <LinkButton color="green">Success</LinkButton>
    <LinkButton color="gray" underline={false}>Plain Text (No underline)</LinkButton>
    <LinkButton disabled>Disabled</LinkButton>
  </div>
</div>

{/* Danger Buttons */}
<div className="space-y-2 mt-4">
  <h3 className="text-xl font-semibold">Danger Buttons</h3>
  <div className="flex gap-4 flex-wrap items-center">
    <DangerButton>Delete</DangerButton>
    <DangerButton size="lg">Delete Large</DangerButton>
    <DangerButton disabled>Disabled Delete</DangerButton>
    <DangerButton fullWidth className="max-w-xs">Full Width</DangerButton>
  </div>
</div>

{/* Success Buttons */}
<div className="space-y-2 mt-4">
  <h3 className="text-xl font-semibold">Success Buttons</h3>
  <div className="flex gap-4 flex-wrap items-center">
    <SuccessButton>Save</SuccessButton>
    <SuccessButton size="lg">Save Large</SuccessButton>
    <SuccessButton disabled>Disabled Save</SuccessButton>
    <SuccessButton fullWidth className="max-w-xs">Full Width</SuccessButton>
  </div>
</div>

    {/* Button Group (Horizontal) */}
<div className="space-y-2 mt-4">
  <h3 className="text-xl font-semibold">Button Group (Horizontal)</h3>
  <ButtonGroup>
    <SuccessButton>Accept</SuccessButton>
    <DangerButton>Decline</DangerButton>
  </ButtonGroup>
</div>

{/* Button Group (Vertical) */}
<div className="space-y-2 mt-4">
  <h3 className="text-xl font-semibold">Button Group (Vertical)</h3>
  <ButtonGroup vertical>
    <SuccessButton>Yes</SuccessButton>
    <DangerButton>No</DangerButton>
  </ButtonGroup>
</div>

{/* Toggle Button  */}
<div className="space-y-2 mt-4">
  <h3 className="text-xl font-semibold">Toggle Switch</h3>
  <ToggleSwitch
    label="Enable Notifications"
    enabled={true}
    onToggle={(val) => console.log('Toggle State:', val)}
  />
</div>






    </div>
  );
};

export default ComponentsTab;
