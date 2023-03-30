UPDATE [dbo].[CtrlBox_In]
SET   [Vendor]=@Vendor,
      [VendorName]=@VendorName,
      [TranDate]=@TranDate
WHERE [BoxId]=@BoxId

SELECT [BoxId]
      ,[Vendor]
      ,[VendorName]
      ,[TranDate]
  FROM [dbo].[CtrlBox_In]
  WHERE [BoxId]=@BoxId